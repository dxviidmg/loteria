import React, { useState, useEffect } from 'react';

const images = [
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 1},
    {image: 'https://m.media-amazon.com/images/I/512L8Zsm8+L._AC_SX425_.jpg', name: 'L', number: 2},
    {image: 'https://www.todopapas.com/img/cuentos/9/8/1/981.jpg', name: 'El gallo', number: 3},
    {image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/599/697/products/loterriamexicana1-9bbc17150ca7af307816268844916702-640-0.jpg', name: 'Loteria', number: 4}
];

export function Lottery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  function handlePlayButtonClick() {
    setIsPlaying(true);
  }

  function handleStopButtonClick() {
    setIsPlaying(false);
  }

  return (
    <div>
      <button onClick={handlePlayButtonClick}>Iniciar presentación</button>
      <button onClick={handleStopButtonClick}>Detener presentación</button>
      <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
    </div>
  );
}