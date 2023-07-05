import React from 'react'
import Navbar from '../components/Navbar'
import './styles/Resultados.css';
import CardResultados from '../components/CardResultados';
import { IoIosArrowBack } from 'react-icons/io';
import maps from '../img/maps.png'
const Resultados = () => {
  return (
    <>
        <Navbar />
        <br />
        <div className="resultados__container">
            <div className="resultados-container__total">
                <div className="resultados__volver">
                    <IoIosArrowBack />
                    <p>Volver</p>
                </div>
                <div className="resultados-card-map__container">
                    <div className="resultados-card__container">
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                        <CardResultados />
                    </div>
                    <div className="resultados-maps__container">
                        <img src={maps} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resultados