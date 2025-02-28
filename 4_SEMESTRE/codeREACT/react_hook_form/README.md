# Neste projeto

## &TIP&APP

- Demonstrar o uso de useForm, hook da lib react-form-hook

## &TIP&HOOKS

- useForm

Instalação: `npm install react-hook-form`

[react-form-hook](https://react-hook-form.com/ "react-form-hook")

```ts

import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';

/**
 * Interface que define os dados esperados pelo formulário.
 * - firstName: Nome do usuário (obrigatório).
 * - mail: Endereço de e-mail do usuário (obrigatório).
 */
interface FormData {
  firstName: string;
  mail: string;
}

/**
 * Componente principal que demonstra o uso da biblioteca react-hook-form.
 * 
 * O react-hook-form é uma biblioteca que facilita o gerenciamento de formulários
 * no React, oferecendo recursos como validação, gerenciamento de estado e erros,
 * tudo com alta performance e menor re-renderização dos componentes.
 */
export default function App() {
  /**
   * useForm: Hook principal da biblioteca que retorna métodos e propriedades para
   * gerenciar o formulário.
   * 
   * - register: Conecta um campo de formulário ao react-hook-form, permitindo que
   *   o seu valor e estado sejam monitorados e validados.
   * - formState: Objeto que contém informações sobre o estado do formulário, como erros.
   * - handleSubmit: Função que processa o evento de submissão do formulário,
   *   validando os campos antes de chamar a função de callback.
   *
   * Aqui, estamos tipando o formulário com a interface FormData para garantir que os
   * dados estejam de acordo com o esperado.
   */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  /**
   * Função executada quando o formulário é submetido com sucesso.
   * 
   * SubmitHandler é um tipo que garante que os dados recebidos estarão em conformidade
   * com a interface FormData. Nesse exemplo, apenas exibimos os dados no console.
   *
   * @param data - Dados coletados dos campos do formulário.
   */
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    // handleSubmit encapsula a função onSubmit, garantindo que a validação dos campos seja realizada
    // antes do envio dos dados. Em caso de erros, o formulário não será submetido.
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*
        O método register conecta o campo "firstName" ao react-hook-form.
        Aqui, passamos a opção { required: true } para tornar o campo obrigatório.
        A propriedade aria-invalid melhora a acessibilidade, informando se o campo possui erro.
      */}
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {/*
        Se houver um erro de validação no campo "firstName" (por exemplo, se ele estiver vazio),
        será exibida uma mensagem de alerta para o usuário.
      */}
      {errors.firstName?.type === 'required' && (
        <p role="alert">First name is required</p>
      )}

      {/*
        Registro do campo "mail" utilizando register. Aqui, além de torná-lo obrigatório,
        fornecemos uma mensagem de erro personalizada que será exibida caso o campo não seja preenchido.
      */}
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {/*
        Se houver um erro no campo "mail", a mensagem de erro definida será exibida.
      */}
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      {/*
        Botão de submissão do formulário. Ao ser clicado, dispara o onSubmit se a validação for bem-sucedida.
      */}
      <input type="submit" />
    </form>
  );
}



```
