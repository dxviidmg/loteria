import './App.css';

import { Cards } from './components/cards/cards';
import Homepage from './components/home/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Lottery } from './components/lottery/lottery';
import { Header } from './components/common/header';
import { Footer } from './components/common/footer';


// function de get data
// buscar usestate en react
  

function App() {

  
  return (

    <BrowserRouter>
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage></Homepage>} />
        <Route path="/tablero" element={<Cards />} />
        <Route path="/sorteo" element={<Lottery />} />
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
