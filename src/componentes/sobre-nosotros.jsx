import carrusel1 from "../imagenes/carrusel1.jpg";
import carrusel2 from "../imagenes/carrusel2.jpg";
import carrusel3 from "../imagenes/carrusel3.jpg";
import "../App.css";

function SobreNos() {
  return (
    <section className="sobre-nosotros seccion-oscura" id="sobre-nos">
      <div className="Titulos">
        <h1 className="contenedor-h1">¡Bienvenido a Villa Sur-Art!</h1>
        <p>
          En Villa Sur-Art, nuestra Casa-Museo-Taller nos apasiona el arte en
          todas sus formas y nos enorgullece presentarte nuestra exquisita
          colección de cuadros artísticos y piezas de cerámica. Sumérgete en un
          mundo de creatividad y belleza, donde cada obra cuenta una historia
          única y evoca emociones poderosas. Entendemos que el arte es una
          expresión personal y una forma de crear un ambiente único en tu
          espacio. Por eso, te ofrecemos asesoramiento personalizado para
          ayudarte a encontrar la pieza perfecta que se ajuste a tu estilo y
          personalidad.
          <br />
          ¡Gracias por visitarnos y esperamos que encuentres la obra perfecta
          para ti en Villa Sur-Art!
        </p>
      </div>
      <div className="CarrouselFotos">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={carrusel2}
                class="d-block w-100 imagen-carrousel"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={carrusel1}
                class="d-block w-100 imagen-carrousel"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={carrusel3}
                class="d-block w-100 imagen-carrousel"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
