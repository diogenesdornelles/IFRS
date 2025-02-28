import './App.css';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useReducer,
} from 'react';
import axios from 'axios';

// ============================================================================
// Tipos e Interfaces para o Contador (Timer)
// ============================================================================

/**
 * Representa o estado do timer.
 */
type TTimerState = {
  time: number;
};

/**
 * Tipos de ações permitidas para atualizar o timer.
 */
type TTypeTActionTimer = 'count' | 'pause' | 'zero' | 'resume';

/**
 * Estrutura de uma ação que será enviada ao reducer do timer.
 */
type TActionTimer = {
  type: TTypeTActionTimer;
};

// ============================================================================
// Reducer para o Contador (Timer)
// ============================================================================

/**
 * Função reducer para gerenciar o estado do timer.
 * Dependendo do tipo de ação, atualiza o tempo ou retorna o estado inalterado.
 *
 * @param state - Estado atual do timer.
 * @param action - Ação a ser aplicada no estado.
 * @returns Novo estado do timer.
 */
function reducer(state: TTimerState, action: TActionTimer): TTimerState {
  switch (action.type) {
    case 'count':
      // Incrementa o tempo em 1
      return {
        time: state.time + 1,
      };
    case 'zero':
      // Reseta o tempo para 0
      return {
        time: 0,
      };
    case 'pause':
    case 'resume':
      // Não altera o estado; a ação pode ser usada para controle externo
      return state;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// ============================================================================
// Componente Principal (App)
// ============================================================================

/**
 * Componente principal que demonstra o uso de diversos hooks do React:
 * useState, useReducer, useRef, useCallback e useEffect.
 *
 * @returns JSX.Element representando a interface do aplicativo.
 */
function App(): JSX.Element {
  // --------------------------------------------------------------------------
  // Estados Gerenciados com useState
  // --------------------------------------------------------------------------

  // Lista de todos (tarefas) e estado do input para adicionar um novo todo.
  const [todos, setTodo] = useState<string[]>([]);
  const [todo, setToDo] = useState<string>('');

  // Estado para armazenar uma mensagem obtida via API.
  const [message, setMessage] = useState<string>('');

  // Número que define qual mensagem será buscada na API.
  const [messageNumber, setMessageNumber] = useState<number>(1);

  // --------------------------------------------------------------------------
  // Estado do Timer com useReducer
  // --------------------------------------------------------------------------

  // Utiliza o reducer para gerenciar o estado do timer (contador).
  // 'state' contém o tempo atual e 'dispatch' é a função para enviar ações.
  const [state, dispatch] = useReducer(reducer, { time: 0 });

  // --------------------------------------------------------------------------
  // Referências com useRef
  // --------------------------------------------------------------------------

  // Armazena a quantidade de todos adicionados sem causar re-render.
  const todosRef = useRef<number>(0);

  // Guarda o ID do timer para controle do setInterval.
  const timerIDRef = useRef<number>(-1);

  // Referência ao elemento input para manipulação direta (ex.: foco).
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Armazena o valor do último todo adicionado, para exibição.
  const previousTodo = useRef<string>('');

  // --------------------------------------------------------------------------
  // Função para Buscar Mensagem via API
  // --------------------------------------------------------------------------

  /**
   * Busca uma mensagem da API com base no número fornecido.
   *
   * @param number - Número que indica qual mensagem buscar.
   */
  const getMessage = (number: number) => {
    // Cria um controlador para possibilitar o cancelamento da requisição
    const controller = new AbortController();
    // Faz a requisição para a API, utilizando o número como identificador
    interface IResponse {
      data: {
        body: string;
      };
    }

    interface IError {
      message: string;
    }

    axios
      .get<IResponse>(`https://jsonplaceholder.typicode.com/posts/${number}`, {
        signal: controller.signal,
      })
      .then(function (response: IResponse) {
        // Atualiza o estado 'message' com o conteúdo retornado pela API
        setMessage(response.data.body);
        console.log(response);
      })
      .catch(function (error: IError) {
        // Em caso de erro, cancela a requisição e loga o erro
        controller.abort();
        console.error(error.message);
      })
      .finally(function () {
        // Bloco executado sempre, independentemente de sucesso ou erro
      });
  };

  // --------------------------------------------------------------------------
  // Memoriza a Função de Requisição para Evitar Reexecuções Desnecessárias
  // --------------------------------------------------------------------------

  /**
   * Memoriza a função getMessage usando useCallback.
   * Assim, ela só será recriada quando 'setMessage' mudar.
   */
  const cachedFn = useCallback(getMessage, [setMessage]);

  // --------------------------------------------------------------------------
  // Efeitos Colaterais com useEffect
  // --------------------------------------------------------------------------

  // Executa apenas uma vez na montagem do componente (semelhante a componentDidMount).
  useEffect(() => {
    console.log('Executa apenas uma vez quando o componente monta.');
    return () => {
      console.log('Executa quando o componente desmonta.');
      // Limpa o timer caso esteja ativo ao desmontar o componente.
      clearInterval(timerIDRef.current);
    };
  }, []);

  // Executa sempre que 'messageNumber' ou 'cachedFn' mudarem.
  useEffect(() => {
    console.log("Executa sempre que 'messageNumber' muda.");
    cachedFn(messageNumber);
  }, [messageNumber, cachedFn]);

  // Executa a cada renderização do componente.
  useEffect(() => {
    console.log('Executa a cada renderização do componente.');
  });

  // --------------------------------------------------------------------------
  // Funções de Manipulação de Eventos
  // --------------------------------------------------------------------------

  /**
   * Adiciona um novo todo à lista e atualiza referências relacionadas.
   */
  const handleBtnClickAdd = (): void => {
    setTodo((prevTodos: string[]) => {
      // Armazena o último todo antes de atualizar a lista
      previousTodo.current = prevTodos[prevTodos.length - 1];
      return [...prevTodos, todo];
    });
    // Limpa o campo de input após adicionar o novo todo
    setToDo('');
    // Incrementa o contador de todos sem causar re-render
    todosRef.current = todosRef.current + 1;
  };

  /**
   * Atualiza o número da mensagem com base no input.
   *
   * @param e - Evento de mudança do input.
   */
  const handleNumberMessageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // Converte o primeiro caractere do valor para número
    const v = Number(e.target.value[0]);
    if (v > 0) setMessageNumber(Number(e.target.value));
    console.log(v);
  };

  /**
   * Atualiza o estado do todo conforme o usuário digita no input.
   *
   * @param e - Evento de mudança do input.
   */
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDo(e.target.value);
  };

  /**
   * Foca o input ao ser clicado.
   */
  const handleClickInput = (): void => {
    // Garante que a referência ao input não seja nula e aplica o foco
    const input = inputRef.current as HTMLInputElement;
    input.focus();
  };

  /**
   * Controla o timer com base no botão clicado.
   *
   * @param e - Evento de clique do botão.
   */
  const handleBtnClickTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Obtém o nome do botão, que define o tipo da ação para o timer
    const typeAction = (e.target as HTMLButtonElement)
      .name as TTypeTActionTimer;
    console.log(typeAction);

    // Se a ação for 'count' ou 'resume' e não houver timer ativo, inicia o timer
    if ((typeAction === 'count' || typeAction === 'resume') && timerIDRef.current < 0) {
      timerIDRef.current = setInterval(
        () => dispatch({ type: typeAction }),
        1000
      );
    }

    // Se a ação for 'pause' ou 'zero', para o timer e despacha a ação correspondente
    if (typeAction === 'pause' || typeAction === 'zero') {
      clearInterval(timerIDRef.current);
      timerIDRef.current = -1; // Reseta o ID do timer
      dispatch({ type: typeAction });
    }
  };

  // --------------------------------------------------------------------------
  // Renderização da Interface do Componente
  // --------------------------------------------------------------------------
  return (
    <div className="flex flex-col align-middle items-center gap-10 border-slate-500 border bg-stone-700 w-[100vw] h-[100vh] text-pretty text-white">
      {/* Seção para exibir e atualizar a mensagem obtida via API */}
      <div className="flex mt-10 max-w-3xl">
        <input
          type="number"
          name="message-number"
          id="message-number"
          onChange={handleNumberMessageChange}
          value={messageNumber}
          className="bg-yellow-700"
        />
        <p className="ml-4">{message}</p>
      </div>

      {/* Seção para gerenciar a lista de todos */}
      <div className="p-4">
        <label htmlFor="todo-input" className="mr-2">
          Entre com novo todo:
        </label>
        <input
          type="text"
          name="todo"
          id="todo-input"
          onChange={handleChangeInput}
          value={todo}
          ref={inputRef}
          onClick={handleClickInput}
          className="bg-yellow-700"
        />
        <button onClick={handleBtnClickAdd} className="bg-red-600 p-2 ml-2">
          Add
        </button>
        <p>Todo anterior: {previousTodo.current}</p>
        <p>Todo atual: {todos[todos.length - 1]}</p>
        <p className="mb-4">Todos number: {todosRef.current}</p>
        {todos.map((todo, i) => (
          <p className="bg-lime-800 p-2" key={`${todo}-${i}`}>
            {todo}
          </p>
        ))}
      </div>

      {/* Seção para controle do timer */}
      <div>
        <button
          onClick={handleBtnClickTimer}
          className="bg-red-600 p-2 ml-2"
          name="count"
        >
          {timerIDRef.current < 0 ? 'Start' : 'Resume'}
        </button>
        <button
          onClick={handleBtnClickTimer}
          className="bg-red-600 p-2 ml-2"
          name="pause"
        >
          Pause
        </button>
        <button
          onClick={handleBtnClickTimer}
          className="bg-red-600 p-2 ml-2"
          name="zero"
        >
          Zero
        </button>
        <p className="mt-6">Counter state: {state.time}</p>
      </div>
    </div>
  );
}

export default App;
