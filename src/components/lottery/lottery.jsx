import React, { useState, useEffect } from "react";
import axios from "axios";
import "./lottery.css";

/*
1 arreglar el renderizado de los axios
2 Entender useeffect
3 Entender logica de linea [isPlaying, cards.length]

*/

export function Lottery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cards/")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImage((currentImage) => (currentImage + 1) % cards.length);
      }, 2000);
    }
    return () => clearInterval(intervalId); // cleanup function to stop the interval when the component unmounts
  }, [isPlaying, cards.length]);

  useEffect(() => {
    if (currentImage === cards.length - 1) {
      setIsPlaying(false);
    }
  }, [currentImage, cards.length]);

  const togglePlaying = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  return (
    <div className="container">
      <div className="lottery-container">
        <div className="image-div">
          <img
            className="image-lottery"
            src={cards[currentImage].image}
            alt={`Imagen ${currentImage + 1}`}
          />
        </div>
        <button onClick={togglePlaying} className="menu-button" >Iniciar presentación</button>
      </div>
    </div>
  );
}
