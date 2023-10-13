import React, { useState } from "react";

export default function ProductInCart({
  imagen,
  cantidad,
  precio,
  nombre,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto
}) {
  return (
    <>
      <div className="cart-product">
        <img src={imagen[0]} alt="..." />
        <div className="cart-prd-info">
          <h3>{nombre}</h3>
          <h4>${precio.toLocaleString()}</h4>
          <div className="product-cart-controllers">
            <button onClick={disminuirCantidad}>-</button>
            <p>{cantidad}</p>
            <button onClick={aumentarCantidad}>+</button>
          </div>
        </div>
        <button className="cerrar" onClick={eliminarProducto}>X</button>
      </div>
    </>
  );
}
