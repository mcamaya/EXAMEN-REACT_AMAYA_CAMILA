import React, { useState } from "react";
import "./css/ProductCard.css";

export default function ProductCard({ nombre, imagen, descripcion, precio }) {
  const [isShowing, setIsShowing] = useState(false);
  const [modalAttr, setModalAttr] = useState("none");

  const addToCart = () => {
    
  }

  const toggleModal = () => {
    if (isShowing) {
      setModalAttr("none");
      setIsShowing(false);
    } else if (!isShowing) {
      setModalAttr("block");
      setIsShowing(true);
    }
  };

  return (
    <div className="card">
      <div className="aside-container">
        <img src={imagen[0]} alt="" />
      </div>
      <div className="great-img">
        <img src={imagen[0]} alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-title">{nombre}</h2>
        <p className="product-description">{descripcion.slice(0, 300)}...</p>
        <h5 className="product-price">${precio.toLocaleString()}</h5>
        <button className="product-button" onClick={() => toggleModal()}>
          Comprar
        </button>
      </div>

      <div style={{ display: modalAttr }} className={`product-modal`}>
        <div className="great-img-modal">
          <img src={imagen[0]} alt="" />
        </div>
        <div className="product-info-modal">
          <h2 className="product-title-modal">{nombre}</h2>
          <p className="product-description-modal">
            {descripcion.slice(0, 200)}...
          </p>
          <div className="modal-bottom">
            <h5 className="product-price">${precio.toLocaleString()}</h5>
            <div>
            <button className="product-button" onClick={() => addToCart()}>Añadir al carrito</button>
            <button className="product-button" onClick={() => toggleModal()}>Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
