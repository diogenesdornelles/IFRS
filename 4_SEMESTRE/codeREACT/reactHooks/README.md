# Neste projeto

## &TIP&APP

O APP visa fornecer um panorama geral sobre hooks

- Implementa um contador via reducer
- Implementa um TODO 
- Busca mensagens em API via axios

## &TIP&TIPAGEM

## &TIP&HOOKS

### useRef

Declaração

```ts
  // Armazena a quantidade de todos adicionados sem causar re-render.
  const todosRef = useRef<number>(0);

  // Guarda o ID do timer para controle do setInterval.
  const timerIDRef = useRef<number>(-1);

  // Referência ao elemento input para manipulação direta (ex.: foco).
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Armazena o valor do último todo adicionado, para exibição.
  const previousTodo = useRef<string>('');

```

### useReducer

- Declaração:

```ts
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
```

- Criação

```ts
  // --------------------------------------------------------------------------
  // Estado do Timer com useReducer
  // --------------------------------------------------------------------------

  // Utiliza o reducer para gerenciar o estado do timer (contador).
  // 'state' contém o tempo atual e 'dispatch' é a função para enviar ações.
  const [state, dispatch] = useReducer(reducer, { time: 0 });
```

- Uso

```ts
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
```

### useCallback

Memorizar permanentemente em memória uma função para evitar renderizações pela mudança de estado

```ts
  // --------------------------------------------------------------------------
  // Memoriza a Função de Requisição para Evitar Reexecuções Desnecessárias
  // --------------------------------------------------------------------------

  /**
   * Memoriza a função getMessage usando useCallback.
   * Assim, ela só será recriada quando 'setMessage' mudar.
   */
  const cachedFn = useCallback(getMessage, [setMessage]);
```

### useEffect

- Life Cycle Methods

```ts
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

```

## &TIP&CODE

Fetch data com AbortController

```ts
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
```
