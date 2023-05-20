
import "../estilos/productos.css"
import React, { useState, useEffect } from 'react';
import Modal from "./modal-carrito"
import { ListaProductos } from "./lista-de-productos";


function Productos() {
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [carrito, setCarrito] = useState(() => {
    const storedCarrito = localStorage.getItem("carrito");
    return storedCarrito ? JSON.parse(storedCarrito) : [];
  });

  useEffect(() => {
    const imagenes = document.querySelectorAll(".div-card");
    imagenes.forEach((imagen) => {
      const categoriaImagen = imagen.getAttribute("data-categoria");

      if (categoriaSeleccionada === "todas" || categoriaSeleccionada === categoriaImagen) {
        imagen.style.display = "block";
      } else {
        imagen.style.display = "none";
      }
    });
  }, [categoriaSeleccionada]);

  useEffect(() => {
    // Guardar el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  
  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };


  // Función para agregar un producto al carrito
  const agregarAlCarrito = (itemId) => {
    setCarrito([...carrito, parseInt(itemId)]);
    console.log("agregando",itemId);
  };
  
  console.log(localStorage)
  return (
    <section className="productos-lista" id="productos">
      <h1 className="d-flex justify-content-center">Nuestras obras, elegi la que mas te guste!</h1>
        <div className="botones-filtro d-flex justify-content-end align-items-end">
          <label for="Name">Filtrar por:</label>
          <select id="categorias" onChange={handleCategoriaChange} value={categoriaSeleccionada}>
            <option value="todas" selected>Todas</option>
            <option value="pintura">Pinturas</option>
            <option value="ceramica">Ceramicas</option>
          </select>
        </div>
        <div className="lista-productos d-flex flex-wrap justify-content-center">
          {ListaProductos.map((item) => {
             return(
             <div class="card div-card" data-categoria={item.categoria} id={item.id} key={item.id}>
             <img src={item.imagen} class="card-img-top" alt="primero" ></img>
             <div class="card-body">
             <p class="card-text"><span className="carta-titulo">{item.nombre}</span><br/>{item.descripcion}<br/><strong>Precio: ${item.precio}</strong></p>
             <a href="#añadircarrito" class="btn btn-primary" onClick={() => agregarAlCarrito(item.id)}>Añadir a Carrito</a>
             </div>  
           </div>
             )
          })}
          </div>
        <div>
          <Modal carrito={carrito} setCarrito={setCarrito} agregarAlCarrito={agregarAlCarrito} />
        </div>
    </section>
  )
}

export default Productos;