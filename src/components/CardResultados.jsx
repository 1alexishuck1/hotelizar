import React from 'react';
import './styles/CardResultados.css';
import img from '../img/img_hotel.jpeg';
import { AiFillStar } from 'react-icons/ai';
import { BiWifi } from 'react-icons/bi';
import { FaBath, FaBed, FaUsers, FiWifi } from 'react-icons/fa';

const CardResultados = () => {
  return (
    <div className="card-resultados__container">
        <div className="card_resultados__img">
            <img src={img} alt="img-hotel" />
        </div>
        <div className="card_resultados__descripcion">
            <div className="card-resultados__titulo">
                <h3>Studio Place Lafayatte</h3>
            </div>
            <div className="card-resultados__estrellas">
              <div className="card-resultados__estrellas-estrellas">
                    <AiFillStar className="card-promo__icons"/>
                    <AiFillStar className="card-promo__icons"/>
                    <AiFillStar className="card-promo__icons"/>
                    <AiFillStar className="card-promo__icons"/>
                    <AiFillStar className="card-promo__icons"/>
              </div>
              <div className="card-resultados__estrellas-texto">
                <b>/5</b>
                <u>(20 comentarios)</u>
              </div>
            </div>
            <div className="card-resultados__detalles">
              <div className="card-resultados__descripcion">
                  <FaUsers className='resultados__icons'/>
                  <p>4 Pers</p>
              </div>
              <div className="card-resultados__descripcion">
                  <FaBed className='resultados__icons'/>
                  <p>3 camas</p>
              </div>
              <div className="card-resultados__descripcion">
                  <FaBath className='resultados__icons'/>
                  <p>2 baños</p>
              </div>
            </div>
            <div className="card-resultados__precio">
              <b>100USD</b>
              <p>/noche</p>
            </div>
        </div>
    </div>
  )
}

export default CardResultados