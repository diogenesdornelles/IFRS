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
    minPublishDate: "1900-01-01",
    maxPublishDate: new Date().toISOString().slice(0, 10),
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

          {[
            ["title", "Título", "text"],
            ["description", "Descrição", "text"],
            ["excerpt", "Trecho", "text"],
            ["minPages", "Páginas Mínimas", "text"],
            ["maxPages", "Páginas Máximas", "text"],
            ["minPublishDate", "Data de Publicação Mínima", "date"],
            ["maxPublishDate", "Data de Publicação Máxima", "date"],
          ].map(([field, label, type]) => (
            <div
              className={`mb-4 ${["minPages", "maxPages", "minPublishDate", "maxPublishDate"].includes(field) ? "grid grid-cols-2 gap-4" : ""}`}
              key={field}
            >
              <label htmlFor={field} className="block mb-1">
                {label}
              </label>
              <Field
                name={field}
                type={type}
                className={`w-full text-gray-900 px-3 py-2 rounded-lg border ${
                  // @ts-expect-error third party lib
                  errors[field] && touched[field]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name={field}
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          ))}

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
