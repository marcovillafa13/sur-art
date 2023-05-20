import React from "react";

function Contacto() {
  return (
    <footer className="contacto seccion-oscura d-flex flex-column justify-content-center align-items-center" id="contacto">
      <p className="footer-texto text-center">Muchas gracias por visitarnos!<br/>Podes encontrarnos tambien en nuestras redes:</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://www.facebook.com/VillaSurArt" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
        <a href="https://www.facebook.com/VillaSurArt" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
        <a href="https://www.facebook.com/VillaSurArt" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
        <a href="mailto:marcovillafa13@hotmail.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">
        Creado por Marco Villafañe (2023) &#169;
      </div>
    </footer>
  )
}

export default Contacto;