import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styleSheets/Servicios.css";
function Servicios({ url, titulo, texto }) {
  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1100,
      origin: "bottom",
      distance: "40px",
      delay: 250,
    });
  }, []);
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
