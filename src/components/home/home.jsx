import { Link } from "react-router-dom";
import "../../App.css";
import "./home.css";

export default function Homepage() {
  return (
    <div className="container container-home">
      <h1 className="menu-header">̈́¿que desea hacer?</h1>
      <div className="buttons-section">
        <Link to="/tablero">
          <button className="menu-button">Generar tablero</button>
        </Link>
        <Link to="/sorteo">
          <button className="menu-button">Iniciar sorteo</button>
        </Link>
      </div>
    </div>
  );
}
