import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.webp';

export default function NavBar() {
  return (
    <nav className="navbar bg-light px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        Mi Tienda
      </NavLink>

      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/category/cat1" className="nav-link">Cat 1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/cat2" className="nav-link">Cat 2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/cat3" className="nav-link">Cat 3</NavLink>
        </li>
      </ul>

      {/* Envolver el ícono del carrito con Link */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
}