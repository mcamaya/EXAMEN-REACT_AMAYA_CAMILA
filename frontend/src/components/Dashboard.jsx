import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import './css/Dashboard.css'

export default function Dashboard() {
  useEffect(() => {

  }, []);

  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className="products-container">
        <ProductCard />
      </div>
    </div>
  )
}
