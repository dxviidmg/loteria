import { Image } from "./utils"

export function Card({card}){
//    console.log(card.image)
    return (
        <div className="card">
        <Image data={{url: card.image, alt: card.name}} />
        <h1>{card.number} {card.name}</h1>
      </div>
    )
}