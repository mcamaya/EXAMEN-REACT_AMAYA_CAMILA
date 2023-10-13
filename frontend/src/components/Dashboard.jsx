import React, { useEffect, useState, lazy, Suspense } from 'react';
import './css/Dashboard.css';
const ProductCard = lazy(() => import('./ProductCard'));

export default function Dashboard() {
  const urlApi = 'http://localhost:5010/producto';
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(urlApi, {
      method: "GET",
      headers: {
        "Accept-version": "1.0.0",
      },
    })
      .then((res) => res.json())
      .then(({data}) => setProductos(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(productos);

  if (!productos) return (
    <h2>Loading...</h2>
  )
  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className="products-container">
        {
          productos.map(({_id, nombre, imagen, descripcion, precio}, index) => (
            <Suspense>
              <ProductCard 
              key={index}
              nombre={nombre}
              imagen={imagen}
              precio={precio}
              descripcion={descripcion}
              id={_id}
            />
            </Suspense>
          ))
        }
      </div>
    </div>
  )
}
