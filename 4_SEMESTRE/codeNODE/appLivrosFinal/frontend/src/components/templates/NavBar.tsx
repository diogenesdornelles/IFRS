import { Link } from "react-router-dom";

/**
 * Renderiza a navbar
 *
 * @return {*}  {JSX.Element}
 */
function NavBar(): JSX.Element {
  return (
    <header className="w-full flex justify-center backdrop-blur-sm bg-black/50 fixed top-0 z-[9999]">
      <nav className="w-3/5">
        <ul className="flex">
          <li
            className="p-2 hover:text-gray-300 bold bold  text-white text-md md:text-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className="p-2 hover:text-gray-300 bold bold  text-white text-md md:text-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            <Link to="/pesquisar">Pesquisar</Link>
          </li>
          <li
            className="p-2 hover:text-gray-300 bold bold  text-white text-md md:text-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            <Link to="/livros">Livros</Link>
          </li>
          <li
            className="p-2 hover:text-gray-300 bold bold  text-white text-md md:text-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            <Link to="/novo">Novo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
