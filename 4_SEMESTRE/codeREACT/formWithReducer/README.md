# Neste projeto

## &TIP&APP

Faz a gestão do formulário mediante uso de reducer

## &TIP&TIPAGEM

```ts
// 2. Definindo o tipo da ação que será enviada para o reducer.
//    A ação contém o campo que será atualizado (field) e o novo valor (value).
type Action = {
  field: keyof State; // 'username' | 'password' | 'phone' | 'email' | 'celphone'
  value: string;
}

// 3. Estado inicial do formulário, com todos os campos iniciados como strings vazias.
const initialState: State = {
  username: '',
  password: '',
  phone: '',
  email: '',
  celphone: '',
};
```

```ts
// 4. Função reducer que recebe o estado atual e uma ação, retornando o novo estado.
//    Ela atualiza somente o campo especificado pela ação.
function reducer(state: State, action: Action): State {
  return {
    ...state,               // Copia as propriedades existentes do estado.
    [action.field]: action.value, // Atualiza a propriedade específica com o novo valor.
  };
}

function App(): JSX.Element {
  // 5. Utilizando o hook useReducer para gerenciar o estado do formulário.
  // Tipando explicitamente o useReducer para evitar que state e dispatch sejam "any"
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);
```

fn callback para verificar mudança de input

```ts
onChange = (e: React.ChangeEvent<HTMLInputElement>)
```

fn callback para tratar o retorn de submissão de form

```ts
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) 
```

## &TIP&HOOKS

- useReducer

```ts

import './App.css';
import React, { useReducer } from 'react';

// 1. Definindo a interface do estado do formulário
interface State {
  username: string;
  password: string;
  phone: string;
  email: string;
  celphone: string;
}

// 2. Definindo o tipo da ação que será enviada para o reducer.
//    A ação contém o campo que será atualizado (field) e o novo valor (value).
type Action = {
  field: keyof State; // 'username' | 'password' | 'phone' | 'email' | 'celphone'
  value: string;
}

// 3. Estado inicial do formulário, com todos os campos iniciados como strings vazias.
const initialState: State = {
  username: '',
  password: '',
  phone: '',
  email: '',
  celphone: '',
};

// 4. Função reducer que recebe o estado atual e uma ação, retornando o novo estado.
//    Ela atualiza somente o campo especificado pela ação.
function reducer(state: State, action: Action): State {
  return {
    ...state,               // Copia as propriedades existentes do estado.
    [action.field]: action.value, // Atualiza a propriedade específica com o novo valor.
  };
}

function App(): JSX.Element {
  // 5. Utilizando o hook useReducer para gerenciar o estado do formulário.
  // Tipando explicitamente o useReducer para evitar que state e dispatch sejam "any"
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

  // 6. Função onChange para lidar com a atualização dos inputs do formulário.
  //    Ela despacha uma ação com o nome do campo (e.target.name) e o novo valor (e.target.value).
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name as keyof State, value: e.target.value });
  };

  // 7. Desestruturando os campos do estado para facilitar o acesso aos valores.
  const { username, password, phone, email, celphone } = state;

  // 8. Função handleSubmit para tratar o envio do formulário.
  //    Ela previne o comportamento padrão (recarregar a página) e imprime os valores no console.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Um nome foi enviado: ' + username);
    console.log('Uma senha foi enviada: ' + password);
    console.log('Um telefone foi enviado: ' + phone);
    console.log('Um email foi enviado: ' + email);
    console.log('Um celular foi enviado: ' + celphone);
  }

  // 9. Renderizando o formulário com os inputs e associando os eventos onChange e onSubmit.
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        {/* Input para o Nome Completo */}
        <div className="form-group">
          <label htmlFor="username">Nome Completo:</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={onChange}
          />
        </div>
        {/* Input para a Senha */}
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="text"
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
          />
        </div>
        {/* Input para o Telefone */}
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={phone}
            onChange={onChange}
          />
        </div>
        {/* Input para o Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={onChange}
          />
        </div>
        {/* Input para o Celular */}
        <div className="form-group">
          <label htmlFor="celphone">Celular:</label>
          <input
            type="text"
            name="celphone"
            className="form-control"
            value={celphone}
            onChange={onChange}
          />
        </div>
        {/* Botão para envio do formulário */}
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;


```
