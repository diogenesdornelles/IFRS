import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Products from './pages/Products.tsx'
import ErrorPage from "./pages/ErrorPage.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails, { loader as productLoader, } from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Define o componente de erro para esta rota
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: productLoader, // Carrega os dados do produto
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
