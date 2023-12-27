import "./App.css";
import Servicios from "./components/Servicios";
import Portafolio from "./components/Portafolio";

function App() {
  return (
    <div className="App">
      <section className="contenedor-servicios" id="servicios">
        <div className="contenedor-titulo">
          <span>My Services</span>
          <h3>What Can I Do</h3>
        </div>
        <div className="servicios-grid">
          <div className="servicio">
            <Servicios
              url="1.jpg"
              titulo="Creative Web Desing"
              texto="A creative design to attract the attention of your customers"
            />
          </div>
          <div className="servicio">
            <Servicios
              url="2.jpg"
              titulo="Fron-End Web Development"
              texto="Development of the style of the website and its interactivity"
            />
          </div>
          <div className="servicio">
            <Servicios
              url="3.png"
              titulo="Responsive Desing"
              texto="Design that adapts to all devices"
            />
          </div>
          <div className="servicio">
            <Servicios
              url="4.png"
              titulo="Technical Support"
              texto="Identification and resolution of technical problems"
            />
          </div>
          <div className="servicio">
            <Servicios
              url="5.jpg"
              titulo="Version Control"
              texto="Using Git for teamwork"
            />
          </div>
          <div className="servicio">
            <Servicios
              url="6.jpg"
              titulo="Continuous Learning"
              texto="Constant updating of skills and new technologies"
            />
          </div>
        </div>
      </section>

      <section className="contenedor-portafolio" id="portafolio">
        <div className="contenedor-titulo">
          <span>My Portafolio</span>
          <h3>My Developed Projects</h3>
        </div>
        <div className="portafolio-grid">
          <div className="portafolio">
            <Portafolio
              web={
                "https://sitio-web-asesoramiento-enzo-alvarados-projects.vercel.app/"
              }
              url={"Asesoramiento.png"}
              nombre="Advice website"
              leng1="HTML: 88.0%"
              leng2="CSS: 10.6%"
              leng3="JavaScript: 1.4%"
            />
          </div>
          <div className="portafolio">
            <Portafolio
              web={"https://app-tareas-one.vercel.app/"}
              url={"Tareas.png"}
              nombre="Task reminder app"
              leng1="HTML: 18.7%"
              leng2="CSS: 37.5%"
              leng3="React: 43.8%"
            />
          </div>
          <div className="portafolio">
            <Portafolio
              web={"https://calculadora-interactiva-dun.vercel.app/"}
              url={"CalculadoraInteractiva.png"}
              nombre="Interactive calculator app"
              leng1="HTML: 26.0%"
              leng2="CSS: 29.5%"
              leng3="React: 44.5%"
            />
          </div>
          <div className="portafolio">
            <Portafolio
              web={"https://contador-de-clics-ten.vercel.app/"}
              url="ContadorDeClics.png"
              nombre="Click counter app"
              leng1="HTML: 36.1%"
              leng2="CSS: 32.5%"
              leng3="React: 31.4%"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
