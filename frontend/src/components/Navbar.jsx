import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import './css/Navbar.css';

export default function Navbar() {
  

  return (
    <>
      <div className="navbar">
        <ul className="scroll-nav">
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
          <li>Producto 1</li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
