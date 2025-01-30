import { StrictMode } from "react";
/* @ts-expect-error: Error in third-party library */
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Update from "./components/Update.js";
import Delete from "./components/Delete.js";
import ErrorPage from "./components/Error.js";
import Home from "./components/Home.js";
import Books from "./components/Books.js";
import New from "./components/New.js";
import Search from "./components/Search.js";
import { BooksProvider } from "./context/BooksContext.js";

import Details from "./components/Details.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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
        path: "/pesquisar",
        element: <Search />,
      },
      {
        path: "/livros",
        element: <Books />,
      },
      {
        path: "/novo",
        element: <New />,
      },
      {
        path: "/livros/alterar/:_id",
        element: <Update />,
      },
      {
        path: "/livros/deletar/:_id",
        element: <Delete />,
      },
      {
        path: "/livros/ver/:_id",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* encapsula a aplicação com o contexto */}
    <BooksProvider>
      {/* passa as rotas como props */}
      <RouterProvider router={router} />
    </BooksProvider>
  </StrictMode>
);
