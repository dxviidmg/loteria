import { useState } from "react"

export function Card({card, index, onClick, style}){
    return (
        <div className="card">
        <img src={card.image} alt={card.alt} style={style} onClick={() => onClick(index)}/>
        <h1>{card.number} {card.name}</h1>
      </div>
    )
}

export function Cards(){

  const cards_default = [
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 1},
    {image: 'https://m.media-amazon.com/images/I/512L8Zsm8+L._AC_SX425_.jpg', name: 'L', number: 2},
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 3},
    {image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/599/697/products/loterriamexicana1-9bbc17150ca7af307816268844916702-640-0.jpg', name: 'Loteria', number: 4}]
    
  const [cards, setCards] = useState(cards_default)

  const handleDelete = (index) => {
    const new_cards = [...cards];
    new_cards.splice(index, 1);
    setCards(new_cards);
    console.log(new_cards, cards)
  };

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