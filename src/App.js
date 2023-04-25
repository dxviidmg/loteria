import './App.css';

import { Cards } from './components/cards/cards';
import Homepage from './components/home/home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Lottery } from './components/lottery/lottery';


// function de get data
// buscar usestate en react
  

function App() {

  
  return (
    
    <div className='App'>
      
      <h1>Loteria</h1>
      <div className='Cards'>
      <Homepage></Homepage>
      <Cards/>
      <Lottery/>

      </div>

    </div>
  );
}

export default App;
