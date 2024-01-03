//    MENU HAMBURGUESA
const nav = document.querySelector(".nav-opciones");
const botonAbrir = document.querySelector(".abrirNav");
const botonCerrar = document.querySelector(".cerrarNav");
const inicio = document.querySelector(".inicio");
const sobreMi = document.querySelector(".sobreMi");
const servicios = document.querySelector(".servi");
const portafolio = document.querySelector(".port");
const contacto = document.querySelector(".contact");

botonAbrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

function cerrarNav() {
  nav.classList.remove("visible");
}

botonCerrar.addEventListener("click", cerrarNav);
inicio.addEventListener("click", cerrarNav);
sobreMi.addEventListener("click", cerrarNav);
servicios.addEventListener("click", cerrarNav);
portafolio.addEventListener("click", cerrarNav);
contacto.addEventListener("click", cerrarNav);

//    ANIMACIÓN SCROLL

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".contenedor-img-fondo, .contenedor-texto-sobreMi", {
    distance: "40px",
    duration: 1100,
    delay: 250,
    origin: "right",
  });
  ScrollReveal().reveal(
    ".contenedor-img-perfil, .contenedor-texto-presentacion, span, h3, p",
    {
      distance: "40px",
      duration: 1100,
      delay: 250,
      origin: "left",
    }
  );
  ScrollReveal().reveal(".contenedor-botones", {
    distance: "40px",
    duration: 1100,
    delay: 250,
    origin: "bottom",
  });
});
