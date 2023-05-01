import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import "./cards.css";
import { Link } from "react-router-dom";


export function Card({ card, index, onClick }) {
  return (
    <div className="card">
      <div className="card-div">
        <img
          className="image-card"
          src={card.image}
          alt={card.alt}
          onClick={() => onClick(index)}
        />
      </div>
      <p>
        {card.number} {card.name}
      </p>
    </div>
  );
}

export function Cards() {
  //  console.log(cards_api)
  const [cards, setCards] = useState([]);

  const handleDelete = (index) => {
    const new_cards = [...cards];
    new_cards.splice(index, 1);
    setCards(new_cards);
    console.log(new_cards, cards);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cards/")
      .then((response) => {
        let limit = Math.round(response.data.length * 0.3);
        setCards(response.data.slice(0, limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  /*  const render = cards.map((card, index) => (
    <div className="card-container" key={index}>
      <Card card={card} index={index} onClick={handleDelete} />
    </div>
  ))


  if (cards.length === 0) {
    return <h1>Ganaste</h1>;
  }
*/

  return (
    <div className="container">
      <h1>Tablero</h1>
      {cards.length === 0 ? (
        <div className="winner-container">
          <h1>Ganaste</h1>
          <button className="menu-button" onClick={handleRefresh}>Jugar otra vez</button>
        </div>
      ) : (
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card-container" key={index}>
              <Card card={card} index={index} onClick={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
