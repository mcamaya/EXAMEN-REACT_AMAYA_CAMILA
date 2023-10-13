import React, { useEffect, useState, lazy, Suspense } from "react";
import Cart from "./Cart";
import "./css/Dashboard.css";
const ProductCard = lazy(() => import("./ProductCard"));

export default function Dashboard() {
  const urlApi = "http://localhost:5010/producto";
  const [productos, setProductos] = useState([]);

  const [estaCategorizado, setEstaCategorizado] = useState(false)

  const categorizar = (categoriaId) => {
    if(estaCategorizado == false){
      let newProducts = productos.map(e => e.categoriaId == categoriaId);
      console.log(newProducts);
      setProductos(newProducts);
      setEstaCategorizado(true);
    } else if (estaCategorizado == true) {
      fetchData();
    }
  }

  const fetchData = () => {
    fetch(urlApi, {
      method: "GET",
      headers: {
        "Accept-version": "1.0.0",
      },
    })
      .then((res) => res.json())
      .then(({ data }) => setProductos(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData()
  }, []);

  const [isShowing, setIsShowing] = useState(false);
  const [cartAttr, setCartAttr] = useState("none");

  const toggleCart = () => {
    if (isShowing) {
      setCartAttr("none");
      setIsShowing(false);
    } else if (!isShowing) {
      setCartAttr("block");
      setIsShowing(true);
    }
  };

  let productCart = localStorage.getItem("myProductCart");
  if (!productCart) {
    localStorage.setItem("myProductCart", JSON.stringify([]));
    productCart = localStorage.getItem("myProductCart");
  }
  const [allProducts, setAllProducts] = useState(JSON.parse(productCart));

  const addToCart = (nombre, imagen, precio) => {
    let productCart = localStorage.getItem("myProductCart");
    if (!productCart) {
      localStorage.setItem("myProductCart", JSON.stringify([]));
      productCart = localStorage.getItem("myProductCart");
    }

    let newItem = {
      nombre,
      imagen,
      precio,
      cantidad: 1,
    };

    const parsedProducts = JSON.parse(productCart);
    let newList = [...parsedProducts];
    newList.push(newItem);
    setAllProducts(newList)
    localStorage.setItem("myProductCart", JSON.stringify(newList));
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Cart
        cartAttr={cartAttr}
        toggleCart={() => toggleCart()}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
      <button className="product-button" onClick={() => toggleCart()}>
        Ver carrito
      </button>
      <div className="buttons-containers">
        <button onClick={() => categorizar("652967e758635562edc2594c")}>Abrigos</button>
        <button onClick={() => categorizar("6529680558635562edc2594d")}>Camisetas</button>
        <button onClick={() => categorizar("6529681f58635562edc2594e")}>Pantalones</button>
      </div>
      <div className="products-container">
        {productos.map(
          ({ _id, nombre, imagen, descripcion, precio }, index) => (
            <Suspense>
              <ProductCard
                key={index}
                nombre={nombre}
                imagen={imagen}
                precio={precio}
                descripcion={descripcion}
                addToCart={() => addToCart(nombre, imagen, precio)}
              />
            </Suspense>
          )
        )}
      </div>
    </div>
  );
}
