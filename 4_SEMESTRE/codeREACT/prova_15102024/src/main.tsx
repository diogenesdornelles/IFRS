import { StrictMode } from "react";
{/* @ts-expect-error: Error in third-party library */ }
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Home from "./components/Home.js";
import Alterar from "./components/Alterar.js";
import Deletar from "./components/Deletar.js";
import Livros from "./components/Livros.js";
import ErrorPage from "./components/Error.js";
import Novo from "./components/Novo.js";
import { LivrosProvider } from "./context/LivrosContext.js";

import Detalhes from "./components/Detalhes";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Iniciar o roteamento. Root é app, que chama filhos dentro do Outlet em App.tsx. Registra página de erros.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Define o componente de erro para esta rota
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/livros",
        element: <Livros />,
      },
      {
        path: "/novo",
        element: <Novo />,
      },
      {
        path: "/livros/alterar/:id",
        element: <Alterar />,
      },
      {
        path: "/livros/deletar/:id",
        element: <Deletar />,
      },
      {
        path: "/livros/ver/:id",
        element: <Detalhes />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(

  <StrictMode>
    {/* encapsula a aplicação com o contexto */}
    <LivrosProvider>
      {/* passa as rotas como props */}
      <RouterProvider router={router} />
    </LivrosProvider>
  </StrictMode>
);
