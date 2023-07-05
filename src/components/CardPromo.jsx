import React from 'react';
import './styles/CardPromo.css';
import img_hotel from '../img/img_hotel.jpeg';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CardPromo = () => {

    const navigate = useNavigate();



  return (
    <div className="card-promo__container">
        <div className="card-promo__contenido" onClick={()=> {navigate('/alojamiento')}}>
            <div className="card-promo__img">
                <img src={img_hotel} />
            </div>
            <div className="card-promo__datos">
                <div className="card-promo__nombre">
                    <p>Studio Place Lafayatte</p>
                </div>
                <div className="card-promo__estrellas">
                    <AiFillStar className="card-promo__icons-estrellas"/>
                    <AiFillStar className="card-promo__icons-estrellas"/>
                    <AiFillStar className="card-promo__icons-estrellas"/>
                    <AiFillStar className="card-promo__icons-estrellas"/>
                    <AiFillStar className="card-promo__icons-estrellas"/>
                </div>
                <div className="card-promo__descripcion">
                    <p>4 Pers - 2 Hab - 3 camas</p>
                </div>
                <div className="card-promo__precio">
                    <p>USD 100</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPromo