import logosurart from "../imagenes/logosurart.png";
import "../estilos/navbar.css"

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');

  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});


function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-toggler">
        <a class="navbar-brand" href="#value">
          <img src={logosurart} alt="logo" width="100"/>
        </a>
        <ul class="navbar-nav d-flex justify-content-center align-items-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#sobre-nos">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#productos">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#donde-encontrarnos">Donde encontrarnos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
          <li class="nav-item icono-carrito">
            <a class="nav-link" href="#exampleModal" data-bs-toggle="modal"
              data-bs-target="#exampleModal"><i class="bi bi-cart-plus"></i></a>
          </li>
        </ul>
      </div>
      </div>
      </nav>
  )
}

export default NavBar;