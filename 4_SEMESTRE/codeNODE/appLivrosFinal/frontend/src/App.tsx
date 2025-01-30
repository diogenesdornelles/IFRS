import "animate.css";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/templates/Footer";
import NavBar from "./components/templates/NavBar";
import ScrollToTop from "./components/nested/ScrollToTop";

/**
 * Renderiza a home page
 *
 * @return {*}  {JSX.Element}
 */
function App(): JSX.Element {
  const navigate = useNavigate();

  // useEffect é chamado para jogar / em /home
  useEffect(() => {
    return navigate("/home");
  }, [navigate]);
  return (
    <>
      <ScrollToTop />
      <div className="bg-w-full bg-cover bg-center bg-no-repeat w-screen min-h-screen  brightness-[.9] contrast-125 -z-50 fixed"></div>
      <div className="flex flex-col bg-transparent min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
