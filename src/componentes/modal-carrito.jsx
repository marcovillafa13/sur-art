import React from "react";
import { ListaProductos } from "./lista-de-productos";
import "../App.css";

function Modal({ carrito, agregarAlCarrito, setCarrito }) {
  const realizarPedido = () => {
    const pedido = obtenerDetallesPedido();

    const mensaje = `Hola, estuve visitando su pagina web y estoy interesado en adquirir el producto ${pedido}`;

    const url = `https://api.whatsapp.com/send?phone=3865456396&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  const obtenerDetallesPedido = () => {
    return carrito
      .map((itemId) => {
        const producto = ListaProductos.find((item) => item.id === itemId);
        if (producto) {
          return `${producto.nombre} - $${producto.precio}`;
        }
        return null;
      })
      .join("\n");
  };

  const eliminarDelCarrito = (itemId) => {
    const nuevoCarrito = carrito.filter((id) => id !== itemId);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    console.log("carrito", nuevoCarrito);
  };

  return (
    <div className="container d-flex justify-content-end align-items-end">
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ver carrito
        <i className="bi bi-arrow-right-circle"></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ fontSize: "27px" }}
              >
                <span className="titulo-h">
                  Mi carrito
                  <i className="bi bi-shop"></i>
                </span>
              </h1>
            </div>
            <div className="modal-body">
              <p className="titulo-carrito">Productos en tu carrito :</p>
              <ul>
                {carrito.map((itemId) => {
                  const producto = ListaProductos.find(
                    (item) => item.id === itemId
                  );
                  if (producto) {
                    return (
                      <li key={itemId} className="elementos-li">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          width="40"
                        ></img>
                        <span className="nombre-precio">
                          {producto.nombre} - ${producto.precio}
                        </span>
                        <button
                          onClick={() => eliminarDelCarrito(itemId)}
                          class="btn btn-warning"
                        >
                          Eliminar
                        </button>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={realizarPedido}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
