import React, { useState } from "react";
import ProductInCart from "./ProductInCart";
import "./css/Cart.css";

export default function Cart({ cartAttr, toggleCart, allProducts, setAllProducts }) {

  const aumentarCantidad = (nombre) => {
    const newList = [...allProducts];
    const index = newList.findIndex((i) => i.nombre == nombre);
    newList[index].cantidad++;
    setAllProducts(newList);
    localStorage.setItem("myProductCart", JSON.stringify(newList));
  };

  const disminuirCantidad = (nombre) => {
    const newList = [...allProducts];
    const index = newList.findIndex((i) => i.nombre == nombre);
    newList[index].cantidad--;
    setAllProducts(newList);
    localStorage.setItem("myProductCart", JSON.stringify(newList));
  };

  const eliminarProducto = (nombre) => {
    const newList = [...allProducts];
    const index = newList.findIndex((i) => i.nombre == nombre);
    newList.splice(index, 1);
    console.log(newList);
    setAllProducts(newList);
    localStorage.setItem("myProductCart", JSON.stringify(newList));
  }

  let totalCart = 0;
  allProducts.forEach(element => {
    console.log(element);
    let result = element.cantidad * element.precio;
    totalCart += result;
  });

  return (
    <div style={{ display: cartAttr }} className="carrito">
      <h2>Carrito de Compras</h2>
      <div className="cart-products-container">
        {allProducts.map(({ imagen, cantidad, precio, nombre }, index) => (
          <ProductInCart
            imagen={imagen}
            cantidad={cantidad}
            precio={precio}
            nombre={nombre}
            aumentarCantidad={() => aumentarCantidad(nombre)}
            disminuirCantidad={() => disminuirCantidad(nombre)}
            eliminarProducto={() => eliminarProducto(nombre)}
          />
        ))}
      </div>
      <h2>TOTAL: ${totalCart.toLocaleString()}</h2>
      <button className="product-button" onClick={toggleCart}>Volver</button>
    </div>
  );
}
