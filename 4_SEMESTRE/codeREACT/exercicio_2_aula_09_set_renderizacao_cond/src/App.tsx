import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';
import { useState } from 'react';


type TUserType = "Admin" | "Visitante"


const App: React.FC = () => {
  const [userType, setUserType] = useState<TUserType>('Visitante')
  let text: string;
  if (userType === "Admin") {
    text = "Gerenciar usuários"
  } else {
    text = "Fazer login"
  }
  const handleClick = () => {
    setUserType((prevState) => {
      if (prevState === "Admin") {
        return "Visitante"
      } else {
        return "Admin"
      }
    })
  }

  return (
    <div>
      <Header />
      <section>
        <p>
          {userType === "Visitante" ? "Bem-vindo, Visitante" : "Bem-vindo, Admin"}
        </p>
        <div>
          {userType === "Visitante" ? <Button text={text} /> : <Button text={text} />}
        </div>
        <button onClick={handleClick}>Mudar usuário</button>
      </section>
      <Footer />
    </div>
  );
};

export default App;