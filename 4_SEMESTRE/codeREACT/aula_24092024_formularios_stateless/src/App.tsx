import './App.css';
import React, { useReducer } from 'react'

// import { z } from "zod";

// const emailSchema = z.string().email({ message: "Invalid email address" });
// const nameSchema = z.string().min(3, { message: "Must be 3 or fewer characters long" });
// const phoneSchema = z.string().regex(/[0-9]{11}/)
// const pwdSchema = z.string().min(8, { message: "Must be 8 or fewer characters long" });
// const userNameSchema = z.string().min(5, { message: "Must be 5 or fewer characters long" });

const initialState = {
  username: '',
  password: '',
  phone: '',
  email: '',
  celphone: '',
}
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }
  const { username, password, phone, email, celphone } = state;
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Um nome foi enviado: ' + username);
    console.log('Uma senha foi enviada: ' + password);
    console.log('Um telefone foi enviado: ' + phone);
    console.log('Um email foi enviado: ' + email);
    console.log('Um celular foi enviado: ' + celphone);
  } return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome Completo:</label>
          <input
            type='text'
            name='username'
            className='form-control'
            value={username}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type='text'
            name='password'
            className='form-control'
            value={password}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type='text'
            name='phone'
            className='form-control'
            value={phone}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={email}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="celphone">Celular:</label>
          <input
            type='text'
            name='celphone'
            className='form-control'
            value={celphone}
            onChange={onChange} />
        </div> <div className="form-group">
          <button type="submit">Enviar </button>
        </div>
      </form >
    </div >
  )
}
export default App