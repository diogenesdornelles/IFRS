# Neste projeto

## &TIP&APP

Cria um gerenciamento simples de rotas via react-router-dom

# &TIP&CODE

Primeiro passo, definir o roteamento:

Parâmetros Comuns nas Rotas

- path
Define o padrão da URL para a rota. Pode incluir segmentos dinâmicos usando dois pontos, como em ":customerId", que permite capturar valores variáveis da URL.

- element
Especifica o elemento React que deve ser renderizado quando a rota for correspondida. No seu exemplo, `<CustomerList /> e <CustomerDetails />` são os componentes renderizados.

- children
Permite a criação de rotas aninhadas, definindo um array de objetos de rota. Isso é útil para estruturar hierarquias de páginas (por exemplo, uma rota principal com subrotas).

- index
Quando definida como true, essa rota se comporta como a rota padrão (ou index) de um grupo de rotas aninhadas. No seu exemplo, a rota com index: true é a rota padrão para /customers.

- loader
Função responsável por carregar dados antes de renderizar o componente da rota. Essa função é executada quando a rota é acessada, permitindo que o componente tenha acesso aos dados necessários para renderização.

```ts

// Definimos o router com as rotas dinâmicas e loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/customers" />, // Redireciona de "/" para "/customers"
  },
  {
    path: "/customers",
    children: [
      {
        index: true, // Define esta rota como indexada (padrão é "/customers")
        element: <CustomerList />, // Página da lista de clientes
        loader: customersLoader, // Carrega a lista de clientes
      },
      {
        path: ":customerId", // Rota dinâmica para detalhes do cliente
        element: <CustomerDetails />,
        loader: customerDetailsLoader, // Carrega os detalhes do cliente específico
      },
    ],
  },
]);
```

Outros Parâmetros Aceitáveis

- action
Função que lida com envios de formulários ou outras interações que alteram dados. Ela é executada quando uma ação (como um submit) é disparada em uma rota.

- errorElement
Elemento React que será renderizado caso ocorra um erro durante o carregamento dos dados (via loader) ou durante a execução da action. Isso permite uma gestão centralizada dos erros da rota.

- caseSensitive
Booleano que, se definido como true, torna a correspondência do caminho sensível a maiúsculas e minúsculas.

- id
Um identificador único para a rota, útil quando se precisa referenciar ou identificar uma rota em particular (por exemplo, para debug ou quando se utiliza os dados carregados).

- handle
Permite anexar dados arbitrários à rota que podem ser utilizados por outros componentes ou hooks da aplicação, facilitando a passagem de informações extras sem afetar a renderização.

- lazy
Um recurso que permite carregar o componente de forma assíncrona (lazy loading). Essa abordagem pode ajudar a melhorar o desempenho, carregando o componente somente quando ele for necessário.

## Loaders

os loaders realmente simplificam o gerenciamento de estado. Em vez de você ter que, dentro do componente, extrair parâmetros com useParams e fazer chamadas para buscar os dados (por exemplo, selecionar um cliente específico), o loader permite que essa lógica de carregamento seja centralizada na definição da rota.

```ts

// Loader para carregar a lista de clientes
const customersLoader = (): TCustomerData[] => {
  return customersData; // Retorna a lista de clientes diretamente
};
// Loader para carregar os detalhes de um cliente específico
const customerDetailsLoader = ({ params }: any): TCustomerData => {
  const customerId = parseInt(params.customerId, 10); // Converte o ID para número
  const customer = customersData.find(c => c.id === customerId); // Encontra ocliente no array
  if (!customer) {
    throw new Error("Cliente não encontrado"); // Caso o cliente não exista
  }
  return customer;
};
```

É necessário exportar o RouterProvider

```ts

function App() {
  return <RouterProvider router={router} />;
}
export default App;
```

Por fim, é necessário definir os 'Outlets'.

O componente Outlet funciona como um espaço reservado onde o React Router renderiza os componentes das rotas filhas. No seu exemplo, o componente CustomerList mostra a lista de clientes e inclui o Outlet logo abaixo. Isso significa que:

Para a rota index (ou seja, /customers):
Apenas a lista de clientes é renderizada, e o Outlet permanece vazio, pois nenhuma rota filha está sendo exibida.

Para a rota dinâmica (por exemplo, /customers/:customerId):
O React Router renderiza o componente CustomerDetails dentro do Outlet do CustomerList. Assim, a lista de clientes continua visível, e os detalhes do cliente selecionado são exibidos abaixo dela.

Essa abordagem de usar Outlet facilita a composição de layouts, permitindo que o contêiner (neste caso, a lista de clientes) permaneça constante enquanto o conteúdo específico (como os detalhes do cliente) muda conforme a rota acessada. Outros componentes ou rotas filhas que não sejam a rota index (definida com index: true) serão renderizados nesse espaço reservado.

```ts

import './CustomerList.css'
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { TCustomerData } from '../App';

function CustomerList() {
    const customers = useLoaderData<TCustomerData[]>(); // Carrega a lista de clientes do loader
    return (
        <div className="container">
            <h1>Lista de Clientes</h1>
            <ul className="customer-list">
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {/* Link para a página de detalhes do cliente */}
                        <Link to={/customers/${customer.id}}>{customer.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Renderiza os detalhes do cliente na mesma página */}
            <Outlet />
        </div>
    );
}
export default CustomerList;

```
