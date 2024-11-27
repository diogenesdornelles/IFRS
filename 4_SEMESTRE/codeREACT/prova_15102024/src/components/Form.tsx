import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { LivrosContext } from "../context/LivrosContext";
import { Formik, Field, Form as _Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import twCss from "../assets/tw/tw";
import { TLivro } from "../models/models";
import ApiService, { RequestOptions } from "../utils/APIService";
import { AxiosResponse } from "axios";
import Spinner from "./Spinner";
import Success from "./Success";
import Fail from "./Fail";
import Book from '../assets/images/book.webp'

const initialState: TLivro = {
  id: 0,
  title: '',
  description: '',
  pageCount: 0,
  excerpt: '',
  publishDate: '',
}

/**
 * Renderiza o formulário de criação ou atualização de livro, a depender se existe id como parametro
 *
 * @return {*}  {JSX.Element}
 */
function Form(): JSX.Element {
  // esquema de validação YUP
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Deve informar o título'),
    description: Yup.string()
      .required('Deve informar a decrição')
      .min(10, 'A descrição deve ter pelo menos 10 caracteres')
      .max(255, 'A descrição não pode ultrapassar 255 caracteres'),
    pageCount: Yup.number()
      .required('Deve informar o número de páginas')
      .min(1, 'Número mínimo de páginas deve ser 1'),
    excerpt: Yup.string()
      .required('Deve informar um trecho')
      .min(20, 'O trecho deve ter pelo menos 10 caracteres')
      .max(512, 'O trecho não pode ultrapassar 512 caracteres'),
    publishDate: Yup.string()
      .required('Deve informar data de publicação')
  });

  // pega os livros junto ao contexto
  const { livros } = useContext(LivrosContext);
  const [isFormNewLivro, setIsFormNewLivro] = useState(true);
  // obtem ID na rota
  const { id } = useParams();
  // mantém informações do livro de forma persistida, mesmo que haja renderização
  const livroRef = useRef(initialState);
  const [livro, setLivro] = useState(initialState);
  const [onSubmmiting, setOnSubmmiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    if (id) {
      livroRef.current = livros.find((livro) => livro.id === Number(id)) as TLivro; // Busca o livro pelo ID
      if (livroRef.current) {
        setIsFormNewLivro(false)
        // "2024-10-18T02:10:44.386Z" API
        // YYYY-MM-DDTHH:mm
        livroRef.current.publishDate = livroRef.current.publishDate.slice(0, 16)
        setLivro(livroRef.current)
      }
    }
  }, [livros, id, setLivro, setIsFormNewLivro])


  const handleSubmit = (data: TLivro) => {
    // fn ou hook para criação ou alteração, com base isFormNewLivro
    async function processReq() {
      setOnSubmmiting(true)
      let response: AxiosResponse | void;
      const handler = new ApiService()
      if (isFormNewLivro) {
        const reqOp: RequestOptions = { operation: 'POST', data: data, id: '' }
        response = await handler.executeRequest(reqOp)
      } else {
        const reqOp: RequestOptions = { operation: 'PUT', data: data, id: data.id }
        response = await handler.executeRequest(reqOp)
      }
      if (response && response.status === 200) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
        }, 4000)
      } else {
        setIsFailed(true)
        setTimeout(() => {
          setIsFailed(false)
        }, 4000)

      }
      setOnSubmmiting(false)
    }


    processReq()

  }

  return (
    <>
      {onSubmmiting && <Spinner />}
      {!isFormNewLivro && <img src={Book} alt="livro" className="animate__animated animate__fadeIn w-96 h-auto rounded-lg" />}
      {isFailed && <Fail param={{ mMsg: 'Falha!', sMsg: isFormNewLivro ? 'Livro não foi salvo no banco de dados' : 'Livro não alterado no banco de dados' }} />}
      {isSuccess ? <Success param={{ mMsg: 'Sucesso!', sMsg: isFormNewLivro ? 'Livro salvo no banco de dados' : 'Livro alterado no banco de dados' }} /> : (
        <div className={twCss.form}>
          <Formik
            enableReinitialize={true}
            initialValues={livro}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ errors, touched, resetForm }) => (
              <_Form >
                {
                  livroRef.current.id ? (
                    <div className={twCss.group}>
                      <label htmlFor="id" className={twCss.label} style={{ textShadow: twCss.textShadow }}>ID</label>
                      <Field
                        disabled
                        name="id"
                        type="text"
                        className={
                          twCss.input +
                          (errors.id && touched.id ? ` ${twCss.isInvalid}` : '')
                        }
                      />
                      <ErrorMessage
                        name="id"
                        component="div"
                        className={twCss.invalidFeedback}
                      />
                    </div>
                  ) : <></>
                }
                <div className={twCss.group}>
                  <label htmlFor="title" className={twCss.label} style={{ textShadow: twCss.textShadow }}>Título</label>
                  <Field
                    name="title"
                    type="text"
                    className={
                      twCss.input +
                      (errors.title && touched.title ? ` ${twCss.isInvalid}` : '')
                    }
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className={twCss.invalidFeedback}
                  />
                </div>
                <div className={twCss.group}>
                  <label htmlFor="description" className={twCss.label} style={{ textShadow: twCss.textShadow }}> Descrição </label>
                  <Field name="description"
                    type="text"
                    className={
                      twCss.input +
                      (errors.description && touched.description ? ` ${twCss.isInvalid}` : '')
                    }
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className={twCss.invalidFeedback}
                  />
                </div>
                <div className={twCss.group}>
                  <label htmlFor="pageCount" className={twCss.label} style={{ textShadow: twCss.textShadow }}> Páginas </label>
                  <Field
                    name="pageCount"
                    type="text"
                    className={
                      twCss.input +
                      (errors.pageCount && touched.pageCount ? ` ${twCss.isInvalid}` : '')
                    }
                  />
                  <ErrorMessage
                    name="pageCount"
                    component="div"
                    className={twCss.invalidFeedback}
                  />
                </div>
                <div className={twCss.group}>
                  <label htmlFor="excerpt" className={twCss.label} style={{ textShadow: twCss.textShadow }}> Trecho </label>
                  <Field
                    name="excerpt"
                    type="text"
                    className={
                      twCss.input +
                      (errors.excerpt && touched.excerpt ? ` ${twCss.isInvalid}` : '')
                    }
                  />
                  <ErrorMessage name="excerpt"
                    component="div"
                    className={twCss.invalidFeedback}
                  />
                </div>
                <div className={twCss.group}>
                  <label htmlFor="publishDate" className={twCss.label} style={{ textShadow: twCss.textShadow }}> Data de publicação </label>
                  <Field
                    name="publishDate"
                    type="datetime-local"
                    className={
                      twCss.input +
                      (errors.publishDate && touched.publishDate ? ` ${twCss.isInvalid}` : '')
                    }
                  />
                  <ErrorMessage
                    name="publishDate"
                    component="div"
                    className={twCss.invalidFeedback}
                  />
                </div>
                <div className={twCss.group}>
                  <button type="submit" className={twCss.mainBtn}>
                    {isFormNewLivro ? 'Criar' : 'Atualizar'}
                  </button>
                  <button
                    type="button"

                    onClick={resetForm as React.MouseEventHandler<HTMLButtonElement>}
                    className={twCss.secondaryBtn}
                  >
                    Limpar
                  </button>
                </div>
              </_Form>
            )}
          </Formik>
        </div >


      )}

    </>
  )

}

export default Form;