import { Outlet } from 'react-router-dom';
import './App.css';
import 'animate.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

/**
 * Renderiza a home page
 *
 * @return {*}  {JSX.Element}
 */
function App(): JSX.Element {
  const navigate = useNavigate();

  // useEffect é chamado para jogar / em /home
  useEffect(() => {
    return navigate('/home')
  }, [navigate])
  return (
    <div className="bg-w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col brightness-[.9] contrast-125">
      <NavBar />
      <main className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full mx-auto p-4 gap-4 md:gap-6 max-w-fit mb-10" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default App;
