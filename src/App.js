import './App.css';

import { Card } from './cards';

const data_cards = [
  {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 1},
  {image: 'https://m.media-amazon.com/images/I/512L8Zsm8+L._AC_SX425_.jpg', name: 'L', number: 2}
]


const cardList = data_cards.map(card => 
  <Card card={card}/>

  )
  

function App() {
  return (
    <div className='App'>
      <h1>Loteria</h1>
      <div className='Cards'>
      {cardList}
      </div>

    </div>
  );
}

export default App;
