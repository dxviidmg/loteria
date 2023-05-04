import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./lottery.css";
import fin from "../assets/img/fin.png";

/*
1 arreglar el renderizado de los axios
2 Entender useeffect
3 Entender logica de linea [isPlaying, cards.length]
4 Recibir la data de una api y poder renderizarla por filas y responsivamente

el renderizado es mas rapido que la api

persistencia de datos en el localstorage


*/

const url = "http://localhost:8000/api/cards/";

export function Lottery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(url);
        const updatedResponse = [...response.data, { name: "Fin", image: fin }];
        setImages(updatedResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    function incrementIndex() {
      setCurrentIndex((currentIndex + 1) % images.length);
    }

    if (isPlaying) {
      intervalId.current = setInterval(incrementIndex, 2000);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [currentIndex, images, isPlaying]);

  useEffect(() => {
    console.log("intervalId.current", currentIndex);
    if (currentIndex === images.length - 1) {
      setIsPlaying(false);
    }
  }, [currentIndex, images.length]);

  function handlePlayButtonClick() {
    setIsPlaying(!isPlaying);
  }


  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Sorteo</h1>
      <div className="lottery-container">
        <div className="image-div">
        <img className="image-lottery"
          src={images[currentIndex]?.image}
          alt="slider image"
          onError={() => {
            clearInterval(intervalId.current);
            setIsPlaying(false);
          }}
        />
        </div>
        <br/>
        <p>{images[currentIndex]?.name}</p>
        <button className="menu-button" onClick={handlePlayButtonClick}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <br/>
        {currentIndex === images.length - 1 ? (<button className="menu-button" onClick={handleRefresh}>
          Reiniciar
        </button>): ""}
      </div>
    </div>
  );
}
