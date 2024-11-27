import './App.css';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useReducer,
} from 'react';
import axios from 'axios';

type TTimerState = {
  time: number;
};
type TTypeTActionTimer = 'count' | 'pause' | 'zero' | 'resume';

type TActionTimer = {
  type: TTypeTActionTimer;
};

function reducer(state: TTimerState, action: TActionTimer): TTimerState {
  switch (action.type) {
    case 'count':
      return {
        time: state.time + 1,
      };
    case 'zero':
      return {
        time: 0,
      };
    case 'pause':
    case 'resume':
      return state; // Explicitamente não altera o estado
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
/**
 *
 *
 * @return {*}  {JSX.Element}
 */
function App(): JSX.Element {
  // ordem de execução entre hooks está ligada a ordem em que aparecem no código
  // é importante chamar corretamente para manter consistência

  // desestrutura array com initialState e fn de dispach
  const [todos, setTodo] = useState<string[]>([]);
  const [todo, setToDo] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageNumber, setMessageNumber] = useState<number>(1);

  // const [state, dispatch] = useReducer(reducer, initialArg, init?)
  // reducer: The reducer function that specifies how the state gets updated.
  // initialArg: The value from which the initial state is calculated. It can be a value of any type.
  // optional init: The initializer function that should return the initial state.

  const [state, dispatch] = useReducer(reducer, { time: 0 });
  // state é o estado atual
  // uma função despacho que permite atualizar o estado

  //  is a React Hook that lets you reference a value thats not needed for rendering.
  // aplicações useRef:
  // 1) quando queremos guardar uma variável e a atualizar, sem que isso cause re-render (useState dispatch dentro de useEffect que causa looping infinito). O valor será armazenado em todo ciclo de vida.
  const todosRef = useRef(0);
  // hold timer ID
  const timerIDRef = useRef(-1);
  // 2) armazenar o elemento HTML em si
  const inputRef = useRef(null);
  // guardar o valor anterior de uma ref
  const previousTodo = useRef('');

  // dois parametros, fn setup e array de dependencias
  // componentDidMount: montagem
  // componentDidUpdate: update
  // componentWillUnmount: desmontagem

  // array de dependencia:
  // vazio: irá executar em Mount e Unmount
  // sem: ele irá executar a cada re-render
  // com valores: irá executar no início e a cada atualização dos valores lançados no array

  // uso de arrays e objetos no array de dependencia:
  // arrays e objetos e outros dados complexos são comparados por referência e não por valor
  // solução é?:
  //   a memoização para dados (valores):
  //   const meuArrayMemoizado = useMemo(() => [1, 2, 3], []);
  //   a memoização de fns:
  // const memoizedCallback = useCallback(
  //   () => {
  //     // Função que será memoizada
  //   },
  //   [dependencias] // Lista de dependências
  // );

  // ordem de execução
  // Montagem: array vazio, preenchido ou sem dependencias: render -> useEffect (componentDidMount)
  // Update: array com dependências: re-render (quando props ou estado mudam) -> useEffect (pode ser usado fn de limpeza) (componentDidUpdate)
  // unMount:  retorna uma função de limpeza (componentWillUnmount)

  const getMessage = (number: number) => {
    const controller = new AbortController();
    // Faz uma requisição a um usuarío com um ID expecifico
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${number}`, {
        signal: controller.signal,
      })
      .then(function (response) {
        setMessage(response.data['body']);
        console.log(response);
      })
      .catch(function (error) {
        // manipula erros da requisição
        controller.abort();
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });
    //
  };
  // memoizando, colocando como cache a função que requisita dados, para que não haja inumeras execução pela mudança no input text
  const cachedFn = useCallback(getMessage, [setMessage]);

  useEffect(() => {
    console.log('This runs only once when the component mounts.');
    return () => {
      console.log('This runs when the component unmounts.');
      clearInterval(timerIDRef.current);
    };
  }, []);

  useEffect(() => {
    console.log("This runs whenever 'messageNumber' changes.");
    cachedFn(messageNumber);
  }, [messageNumber, cachedFn]);

  useEffect(() => {
    console.log('This runs always.');
  });

  const handleBtnClickAdd = (): void => {
    setTodo((preState) => {
      previousTodo.current = preState[preState.length - 1];
      return [...preState, todo];
    });
    setToDo('');
    todosRef.current = todosRef.current + 1;
  };

  const handleNumberMessageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const v = Number(e.target.value[0]);
    if (v > 0) setMessageNumber(Number(e.target.value));
    console.log(v);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDo(e.target.value);
  };

  const handleClickInput = (): void => {
    const input = inputRef.current as unknown as HTMLInputElement;
    input.focus();
  };

  const handleBtnClickTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const typeAction = (e.target as HTMLButtonElement)
      .name as unknown as TTypeTActionTimer;
    console.log(typeAction);
    if ((typeAction === 'count' || typeAction === 'resume') && timerIDRef.current < 0) {
      timerIDRef.current = setInterval(
        () => dispatch({ type: typeAction }),
        1000
      );
    }
    if (typeAction === 'pause' || typeAction === 'zero') {
      clearInterval(timerIDRef.current)
      timerIDRef.current = -1
      dispatch({type: typeAction})
    }
  };

  return (
    <div className="flex flex-col align-middle items-center  gap-10 border-slate-500 border bg-stone-700 w-[100vw] h-[100vh] text-pretty text-white">
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
