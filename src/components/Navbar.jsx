import React from 'react';
import './styles/Navbar.css';
import { BsSearch } from 'react-icons/bs';
import logo from '../img/logo.png';
import menu from '../img/menu.png';

const Navbar = () => {
  return (
    <div className="navbar__container">
        <div className="navbar__conteiner-contenido">
            <div className="navbar__logo">
                <a href="/">
                    <img src={logo} />
                </a>
            </div>
            <div className="navbar__busqueda">
                <input placeholder='Buscar alojamiento en "Buenos aires"'/>
                <div className="navbar-busqueda__icon">
                    <BsSearch />
                </div>
            </div>
            <div className="navbar__menu">
                <img src={menu} />
            </div>
        </div>
    </div>
  )
}

export default Navbar