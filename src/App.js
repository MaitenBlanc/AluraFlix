// import './reset.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Banner></Banner>

        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
