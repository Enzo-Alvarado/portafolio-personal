import React from "react";
import "../styleSheets/Servicios.css";
function Servicios({ url, titulo, texto }) {
  return (
    <div className="card">
      <div className="card_load">
        <img src={require(`../images/servicios${url}`)} />
      </div>
      <div className="card_load_extreme_title">
        <h3>{titulo}</h3>
      </div>
      <div className="card_load_extreme_description">
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Servicios;
