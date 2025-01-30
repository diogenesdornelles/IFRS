import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { BooksContext } from "../../context/BooksContext";
import { TBook, TBooks } from "../../models/models";
import ApiService, { IRequestOptions } from "../../utils/APIService";
import Fail from "./Fail";
import Spinner from "./Spinner";
import Success from "./Success";

const initialState: TBook = {
  _id: "",
  title: "",
  description: "",
  pageCount: 0,
  excerpt: "",
  publishDate: "",
  image: "",
};

type TFileValidation = {
  valid: boolean;
  msg: string;
};

const validateFile = (
  file: File | undefined,
  isFormNewBook: boolean
): { valid: boolean; error?: string } => {
  const validFileExtensions = ["jpg", "jpeg", "png"];
  const maxFileSize = 2 * 1024 * 1024; // 2 MB in bytes

  if (!file) {
    if (isFormNewBook) {
      return {
        valid: false,
        error: "O upload da imagem é obrigatório para novos livros.",
      };
    }
  } else {
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (!fileExtension || !validFileExtensions.includes(fileExtension)) {
      return {
        valid: false,
        error:
          "Formato de arquivo inválido. Apenas JPG, JPEG ou PNG são aceitos.",
      };
    }

    if (file.size > maxFileSize) {
      return {
        valid: false,
        error: "O tamanho do arquivo deve ser no máximo 2MB.",
      };
    }
  }
  return { valid: true };
};

function FormBook(): JSX.Element {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("O título é obrigatório.")
      .min(3, "Título deve ter pelo menos 10 caracteres."),
    description: Yup.string()
      .required("A descrição é obrigatória.")
      .min(10, "A descrição deve ter pelo menos 10 caracteres.")
      .max(255, "A descrição não pode exceder 255 caracteres."),
    pageCount: Yup.number()
      .required("O número de páginas é obrigatório.")
      .min(1, "O número de páginas deve ser pelo menos 1."),
    excerpt: Yup.string()
      .required("Um trecho é obrigatório.")
      .min(20, "O trecho deve ter pelo menos 20 caracteres.")
      .max(512, "O trecho não pode exceder 512 caracteres."),
    publishDate: Yup.date()
      .required("A data de publicação é obrigatória.")
      .max(new Date(), "Data de publicação deve ser no máximo hoje."),
  });

  const { books, setBooks } = useContext(BooksContext);
  const [isFormNewBook, setIsFormNewBook] = useState<boolean>(true);
  const { _id } = useParams();
  const bookRef = useRef(initialState);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [book, setBook] = useState<TBook>(initialState);
  const [onSubmmiting, setOnSubmmiting] = useState<boolean>(false);
  const [isBookSuccess, setIsBookSuccess] = useState<boolean>(false);
  const [isFileSuccess, setIsFileSuccess] = useState<boolean>(false);
  const [isBookFailed, setIsBookFailed] = useState<boolean>(false);
  const [isFileFailed, setIsFileFailed] = useState<boolean>(false);
  const [isValidFile, setIsValidFile] = useState<TFileValidation>({
    valid: true,
    msg: "",
  });

  useEffect(() => {
    if (_id) {
      bookRef.current = books.find((book) => book._id === _id) as TBook;
      if (bookRef.current) {
        setIsFormNewBook(false);
        bookRef.current.publishDate = bookRef.current.publishDate.slice(0, 10);
        setBook(bookRef.current);
      }
    }
  }, [_id, books]);

  const handleSubmit = (data: TBook) => {
    async function processReq() {
      setOnSubmmiting(true);
      const handler = new ApiService<TBook>();
      const reqOp: IRequestOptions = {
        operation: isFormNewBook ? "POST" : "PUT",
        data: data,
        _id: isFormNewBook ? "" : data._id,
      };

      const bookResponse = await handler.executeRequest(reqOp);
      if (bookResponse) {
        let fileResponse: void | TBook;
        setIsBookSuccess(true);
        const file = fileInputRef.current?.files?.[0];
        if (file) {
          const fileValidation = validateFile(file, isFormNewBook);
          if (!fileValidation.valid) {
            setIsValidFile({
              valid: false,
              msg: fileValidation.error as string,
            });
            setOnSubmmiting(false);
            return;
          }

          const formData = new FormData();
          formData.append("file", file);
          const fileResponse = await handler.executeRequest({
            operation: "FILE",
            formData,
            _id: bookResponse._id,
          });
          if (fileResponse) {
            setIsFileSuccess(true);
          } else {
            setIsFileFailed(true);
          }
        }
        setBooks((prevState: TBooks) => {
          if (isFormNewBook) {
            // Adiciona um novo livro
            return [...prevState, fileResponse || bookResponse];
          } else {
            // Atualiza um livro existente
            return prevState.map((book: TBook) => {
              const updatedBook = fileResponse || bookResponse;
              // Substitui apenas se o _id corresponder
              return book._id === updatedBook?._id ? updatedBook : book;
            });
          }
        });
      } else {
        setIsBookFailed(true);
      }

      setTimeout(() => {
        setIsBookFailed(false);
        setIsFileFailed(false);
        setIsBookSuccess(false);
        setIsFileSuccess(false);
      }, 6000);
      setOnSubmmiting(false);
    }

    processReq();
  };

  return (
    <>
      {onSubmmiting && <Spinner />}
      {(isBookFailed || isFileFailed) && (
        <Fail
          param={{
            mMsg: "Erro",
            sMsg: isFormNewBook
              ? `${isBookFailed ? "Não foi possível salvar as informações do livro. " : ""}${
                  isFileFailed ? "Não foi possível fazer o upload." : ""
                }`
              : `${isBookFailed ? "Não foi possível atualizar as informações do livro. " : ""}${
                  isFileFailed
                    ? "Não foi possível atualizar a capa do livro."
                    : ""
                }`,
          }}
        />
      )}
      {(isBookSuccess || isFileSuccess) && (
        <Success
          param={{
            mMsg: "Sucesso",
            sMsg: isFormNewBook
              ? `${isBookSuccess ? "As informações do livro foram salvas. " : ""}${
                  isFileSuccess ? "Upload feito com sucesso." : ""
                }`
              : `${isBookSuccess ? "As informações do livro foram atualizadas. " : ""}${
                  isFileSuccess ? "Capa atualizada com sucesso." : ""
                }`,
          }}
        />
      )}
      <div className="flex flex-col justify-center m-auto backdrop-blur-sm max-w-[800px] bg-black/50 rounded-lg text-white text-sm p-6 animate__animated animate__fadeIn mt-20 mb-52">
        <h2 className="text-4xl font-extrabold mb-4 text-center">
          {isFormNewBook ? "Novo Livro" : "Editar Livro"}
        </h2>
        <Formik
          enableReinitialize
          initialValues={book}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="file_input" className="block text-white mb-2">
                  Imagem de Capa (PNG, JPG ou JPEG - Max: 2MB)
                </label>
                <input
                  ref={fileInputRef}
                  id="file_input"
                  name="file"
                  type="file"
                  className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring focus:ring-blue-500 p-2"
                />
                {!isValidFile.valid && (
                  <p className="text-red-500 text-sm">{isValidFile.msg}</p>
                )}
              </div>
              {[
                ["title", "Título", "text"],
                ["description", "Descrição", "text"],
                ["pageCount", "Número de Páginas", "text"],
                ["excerpt", "Trecho", "text"],
                ["publishDate", "Data de Publicação", "date"],
              ].map(([field, label, type]) => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block mb-2">
                    {label}
                  </label>
                  <Field
                    id={field}
                    type={type}
                    name={field}
                    className={`w-full text-gray-900 border border-gray-300 rounded-lg p-2.5 ${
                      // @ts-expect-error library
                      errors[field] && touched[field] ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name={field}
                    component="div"
                    className="text-red-500 text-sm mt-1 bg-black/70 rounded-md p-2"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="btn bg-lime-800 hover:bg-lime-900 text-white w-full py-4 rounded-lg mb-4 mt-10"
              >
                {isFormNewBook ? "Criar" : "Atualizar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormBook;
