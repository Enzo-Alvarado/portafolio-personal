import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styleSheets/Portafolio.css";

function Portafolio({ web, url, nombre, leng1, leng2, leng3 }) {
  const span3 =
    typeof leng3 === "string" && leng3.toLowerCase().includes("javascript")
      ? "javascript"
      : typeof leng3 === "string" && leng3.toLowerCase().includes("react")
      ? "react"
      : "";

  useEffect(() => {
    ScrollReveal().reveal(".contenedor-card-portafolio", {
      duration: 1100,
      origin: "bottom",
      distance: "40px",
      delay: 250,
    });
  }, []);

  return (
    <div className="contenedor-card-portafolio">
      <a href={web}>
        <img src={require(`../images/proyecto${url}`)} />
      </a>
      <h3 className="titulo">{nombre}</h3>
      <p className="lenguajes">
        Created with:
        <span className="span1">{leng1}</span>
        <span className="span2">{leng2}</span>
        <span className={span3}>{leng3}</span>
      </p>
    </div>
  );
}

export default Portafolio;
