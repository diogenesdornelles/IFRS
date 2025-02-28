import { Link } from "react-router-dom";
import twCss from "../assets/tw/tw";

/**
 * Renderiza a navbar
 *
 * @return {*}  {JSX.Element}
 */
function NavBar(): JSX.Element {

    return (
        <header className="w-full flex justify-center backdrop-blur-sm bg-black/30">
            <nav className="w-3/5">
                <ul className="flex">
                    <li className={twCss.list} style={{ textShadow: twCss.textShadow }}><Link to="/home">Home</Link></li>
                    <li className={twCss.list} style={{ textShadow: twCss.textShadow }}><Link to="/livros">Livros</Link></li>
                    <li className={twCss.list} style={{ textShadow: twCss.textShadow }}><Link to="/novo">Novo</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar