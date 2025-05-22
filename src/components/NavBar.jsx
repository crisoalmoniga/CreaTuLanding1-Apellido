import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.webp';

export default function NavBar() {
  return (
    <nav className="navbar bg-light px-4">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        Mi Tienda
      </a>
      <ul className="nav">
        <li className="nav-item"><a className="nav-link" href="#">Cat 1</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Cat 2</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Cat 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
