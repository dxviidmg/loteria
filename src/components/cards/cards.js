import { useState, useEffect } from "react"
import axios from 'axios';


export function Card({card, index, onClick, style}){
    return (
        <div className="card">
        <img src={card.image} alt={card.alt} style={style} onClick={() => onClick(index)}/>
        <h1>{card.number} {card.name}</h1>
      </div>
    )
}

export function Cards(){


  
//  console.log(cards_api)
  const [cards, setCards] = useState([])

  const handleDelete = (index) => {
    const new_cards = [...cards];
    new_cards.splice(index, 1);
    setCards(new_cards);
    console.log(new_cards, cards)
  };


  useEffect(() => {
    axios.get('http://localhost:8000/api/cards/')
      .then(response => {
        let limit = Math.round(response.data.length*0.3)
        setCards(response.data.slice(0, limit));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  if (cards.length === 0){
    return <h1>Ganaste</h1>
  }

  return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, index) =>
          <div key={index} style={{ width: '23%', padding: '10px' }}>
            <Card card={card} index={index} onClick={handleDelete} style={{
            flex: `1 1 ${(100 / 4).toFixed(2)}%`,
            margin: '5px',
            objectFit: 'cover',
            height: '200px',
          }}/>
          </div>
          

      )}

</div>)
}