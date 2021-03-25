import logo from './logo.svg';
import './App.css';
import MainPage from './components/Home-Page/MainPage';
import NavBar from './components/Home-Page/NavBar';
import Footer from './components/Home-Page/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
