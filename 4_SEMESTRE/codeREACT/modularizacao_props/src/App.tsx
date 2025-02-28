import './App.css'
import Menu from './components/menu';
import Sidebar from './components/sidebar';
import News from './components/news';
import Footer from './components/footer';
import Header from './components/header';

const App: React.FC = () => {
  const menuItems = [
    { link: '#home', text: 'Home' },
    { link: '#news', text: 'Sobre' },
    { link: '#contact', text: 'Contato' },
    { link: '#about', text: 'Sobre' },
  ];
  const newsItems = [
    { text: 'Notícia 1...' },
    { text: 'Notícia 2...' },
  ];
  const sidebarItems = [
    { text: 'Artigo 1' },
    { text: 'Artigo 2' },
    { text: 'Artigo 3' },

  ];

  return (
    <div>
      <Header />
      <Menu items={menuItems} />
      <main>
        <News items={newsItems} />
        <Sidebar items={sidebarItems} />
      </main>

      <Footer />
    </div>
  );
};

export default App;