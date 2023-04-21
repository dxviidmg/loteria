import { useState } from "react"
import { Image } from "../utils"

export function Card({card}){  
    return (
        <div className="card">
        <Image data={{url: card.image, alt: card.name}} />
        <h1>{card.number} {card.name}</h1>
      </div>
    )
}

export function Cards(){

  const cards_default = [
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 1},
    {image: 'https://m.media-amazon.com/images/I/512L8Zsm8+L._AC_SX425_.jpg', name: 'L', number: 2},
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 3}
  ]
  const [cards, setCards] = useState(cards_default)

  const handleDelete = (index) => {
    const new_cards = [...cards];
    new_cards.splice(index, 1);
    setCards(new_cards);
  };

  return (<>
        {cards.map((card, index) =>
          <div key={index}>
            <Card card={card} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
          

      )}

  </>)
}