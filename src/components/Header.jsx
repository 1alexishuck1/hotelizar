import React from 'react';
import './styles/Header.css';
import CarrouselCards from './CarrouselCards';

const Header = () => {
  return (
    <div className="header__container">
        <div className="header-contenido__conteiner">
          <div className="header-contenedor">
            <div className="header__titulo">
              <h3>Descubra</h3>
              <h5>The Chateau Residence</h5>
              <p>Y encuentre alojamiento en Puerto Madero</p>
            </div>
          </div>
        </div>
        <div className="header__carrousel">
          <div className="header__cards">
            <CarrouselCards />
          </div>
        </div>
        <div className="header__banner">
          <div className="header-banner__container">
            <div className="header-banner__alojarme">
              <p>¿Dónde alojarme?</p>
            </div>
            <div className="header-banner__restaurantes">
              <p>Restaurantes</p>
            </div>
            <div className="header-banner__experiencias">
              <p>Experiencia</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header