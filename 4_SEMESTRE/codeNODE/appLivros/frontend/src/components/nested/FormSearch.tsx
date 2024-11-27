import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

export interface IQueryOptions {
  title?: string;
  description?: string;
  excerpt?: string;
  minPages?: number;
  maxPages?: number;
  minPublishDate?: string;
  maxPublishDate?: string;
}

interface QueryFormProps {
  handleSubmit: (values: IQueryOptions) => void;
}

const QueryForm: React.FC<QueryFormProps> = ({ handleSubmit }) => {
  // Esquema de validação
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "O título deve ter pelo menos 2 caracteres")
      .max(100, "O título não pode ultrapassar 100 caracteres"),
    description: Yup.string()
      .min(5, "A descrição deve ter pelo menos 5 caracteres")
      .max(255, "A descrição não pode ultrapassar 255 caracteres"),
    excerpt: Yup.string()
      .min(5, "O trecho deve ter pelo menos 5 caracteres")
      .max(512, "O trecho não pode ultrapassar 512 caracteres"),
    minPages: Yup.number()
      .integer("O número mínimo de páginas deve ser um número inteiro")
      .min(1, "O número mínimo de páginas deve ser no mínimo 1"),
    maxPages: Yup.number()
      .integer("O número máximo de páginas deve ser um número inteiro")
      .min(Yup.ref("minPages"), "O número máximo deve ser maior que o mínimo"),
    minPublishDate: Yup.date()
      .nullable()
      .typeError("A data mínima deve ser válida"),
    maxPublishDate: Yup.date()
      .nullable()
      .typeError("A data máxima deve ser válida")
      .min(
        Yup.ref("minPublishDate"),
        "A data máxima deve ser posterior à data mínima"
      ),
  });

  const initialValues: IQueryOptions = {
    title: "",
    description: "",
    excerpt: "",
    minPages: undefined,
    maxPages: undefined,
    minPublishDate: "",
    maxPublishDate: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-black/50 p-6 rounded-lg text-white max-w-[800px] max-h-fit mt-14">
          <h2 className="text-xl font-bold mb-4">Filtro de Livros</h2>

          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Título
            </label>
            <Field
              name="title"
              type="text"
              className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                errors.title && touched.title
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Descrição
            </label>
            <Field
              name="description"
              type="text"
              className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                errors.description && touched.description
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="excerpt" className="block mb-1">
              Trecho
            </label>
            <Field
              name="excerpt"
              type="text"
              className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                errors.excerpt && touched.excerpt
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="excerpt"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="minPages" className="block mb-1">
                Páginas Mínimas
              </label>
              <Field
                name="minPages"
                type="text"
                className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                  errors.minPages && touched.minPages
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="minPages"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="maxPages" className="block mb-1">
                Páginas Máximas
              </label>
              <Field
                name="maxPages"
                type="text"
                className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                  errors.maxPages && touched.maxPages
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="maxPages"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="minPublishDate" className="block mb-1">
                Data de Publicação Mínima
              </label>
              <Field
                name="minPublishDate"
                type="date"
                className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                  errors.minPublishDate && touched.minPublishDate
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="minPublishDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="maxPublishDate" className="block mb-1">
                Data de Publicação Máxima
              </label>
              <Field
                name="maxPublishDate"
                type="date"
                className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                  errors.maxPublishDate && touched.maxPublishDate
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="maxPublishDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold"
          >
            Filtrar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default QueryForm;
