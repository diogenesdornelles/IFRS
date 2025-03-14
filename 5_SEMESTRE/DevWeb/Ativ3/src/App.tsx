import Home from "./pages/Home";
import News from "./components/News";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Sidebar from "./components/Sidebar";
import Menu from "./layouts/Menu";
import Top from "./layouts/Top";
import Main from "./layouts/Main";
import './App.global.css'
import news from './assets/news/news'


const App = () => {


  return (
      <Home>
        <Top>
          <Header />
          <Menu />
        </Top>
        <Main>
          <Sidebar />
          <News news={news}/>
        </Main>
        <Footer/>
      </Home>

  );
}

export default App
