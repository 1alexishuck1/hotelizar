import React from 'react';
import './styles/CarrouselCards.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import menu from '../img/menu.png';
import CardPromo from './CardPromo';

const CarrouselCards = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    
  return (
    <Slider {...settings} className='CarrouselCards__container'>
    <div>
        <CardPromo />
    </div>
    <div>
        <CardPromo />
    </div>
    <div>
        <CardPromo />
    </div>
    <div>
        <CardPromo />
    </div>
    <div>
        <CardPromo />
    </div>
    <div>
        <CardPromo />
    </div>
    {/* Agrega más elementos de oferta aquí */}
  </Slider>
  )
}

export default CarrouselCards