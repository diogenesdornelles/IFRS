import './App.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



function App() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Deve informar o nome'),
    username: Yup.string()
      .required('Deve informar o usuário')
      .min(6, 'O usuário deve ter pelo menos 6 caracteres')
      .max(20, 'O usuário não pode ultrapassar 20 caracteres'),
    email: Yup.string()
      .required('Deve informar o email')
      .email('Email inválido'),
    password: Yup.string()
      .required('Deve informar a senha')
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .max(40, 'A senha não pode ultrapassar 20 caracteres'),
    confirmPassword: Yup.string()
      .required('Deve confirmar a senha')
      .oneOf([Yup.ref('password'), null], 'Senha não confere'),
    acceptTerms: Yup.bool().oneOf([true], 'Deve aceitar os termos'),
  });
  const handleSubmit = (data) => console.log(JSON.stringify(data))

  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  };
  return (
    <div className="register-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className="form-group">
              <label>Nome Completo</label>
              <Field
                name="fullname"
                type="text"
                className={
                  'form-control' +
                  (errors.fullname && touched.fullname ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username"> Usuário </label>
              <Field name="username"
                type="text"
                className={
                  'form-control' +
                  (errors.username && touched.username ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <Field
                name="email"
                type="email"
                className={
                  'form-control' +
                  (errors.email && touched.email ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Senha </label>
              <Field
                name="password"
                type="password"
                className={
                  'form-control' +
                  (errors.password && touched.password ? ' is-invalid' : '')
                }
              />
              <ErrorMessage name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"> Confirme a senha </label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  'form-control' +
                  (errors.confirmPassword && touched.confirmPassword
                    ? ' is-invalid'
                    : '')
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group form-check">
              <Field
                name="acceptTerms"
                type="checkbox"
                className={
                  'form-check-input' +
                  (errors.acceptTerms && touched.acceptTerms
                    ? ' is-invalid'
                    : '')
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Eu li e concordo com os termos
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="div" className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submeter
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-warning float-right"
              >
                Limpar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div >
  )
}
export default App;

