import React from 'react';
import './styles/Alojamiento.css';
import Navbar from '../components/Navbar'
import hotel1 from '../img/hotel1.jpg';
import hotel2 from '../img/hotel2.jpg';
import hotel3 from '../img/hotel3.jpg';
import { AiFillStar } from 'react-icons/ai';
import { BiWifi } from 'react-icons/bi';
import { FaBath, FaBed, FaUsers, FiWifi } from 'react-icons/fa';
const Alojamiento = () => {
  return (
    <>
        <Navbar />
        <br />
        <div className="alojamiento__container">
            <div className="alojamiento-contenido__container">
                <div className="alojamiento__imagenes">
                    <div className="alojamiento__img1">
                        <img src={hotel1} /> 
                    </div>
                    <div className="alojamiento__img2">
                        <img className="alo__img2" src={hotel2} />
                        <img className="alo__img3" src={hotel3} />
                    </div>
                </div>
                <div className="alojamiento__datos">
                    <div className="alojamiento__datos-res">
                        <div className="alojamiento__nombre">
                            <h3>Studio Place Lafayatte</h3>
                        </div>
                       
                        <div className="alojamiento__descripcion">
                            <div className="container__descripcion">
                                <FaUsers className='descripcion__icon'/>
                                <p>4 Pers</p>
                            </div>
                            <div className="container__descripcion">
                                <FaBed className='descripcion__icon'/>
                                <p>3 Camas</p>
                            </div>
                            <div className="container__descripcion">
                                <BiWifi className='descripcion__icon'/>
                                <p>Wifi</p>
                            </div>
                            <div className="container__descripcion">
                                <FaBath className='descripcion__icon'/>
                                <p>2 Baños</p>
                            </div>
                        </div>
                        <div className="alojamiento__datos-reserva">
                            <div className="alojamiento_check__container">
                                <div className="alojamiento__check">
                                    <div className="alojamiento__check-in">
                                        <p>18 DIC 2023</p>
                                        <p>Check in</p>
                                    </div>
                                    <div className="alojamiento__check-out">
                                        <p>27 DIC 2023</p>
                                        <p>Check out</p>
                                    </div>
                                </div>
                            </div>
                            <div className="alojamiento__personas">
                                <div className="alojamiento__persona">
                                    <div className="alojamiento-personas__text">
                                        <p>Adultos</p>
                                        <p>De 13 años o más</p>
                                    </div>
                                    <div className="alojamiento-personas__cantidad">
                                        <button>-</button>
                                        <p>3</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className="alojamiento__persona">
                                    <div className="alojamiento-personas__text">
                                        <p>Niños</p>
                                        <p>De 2 a 12 años</p>
                                    </div>
                                    <div className="alojamiento-personas__cantidad">
                                        <button>-</button>
                                        <p>0</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className="alojamiento__persona">
                                    <div className="alojamiento-personas__text">
                                        <p>Bebés</p>
                                        <p>De 0 a 2 años</p>
                                    </div>
                                    <div className="alojamiento-personas__cantidad">
                                        <button>-</button>
                                        <p>0</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alojamiento__precios">
                            <div className="alojamiento-precios__container">
                                <div className="alojamiento__precios-show">
                                    <p>U$D126 x 10 noches</p>
                                    <p>U$D1260</p>
                                </div>
                                <div className="alojamiento__precios-show">
                                    <p>Tarifa limpieza</p>
                                    <p>U$D60</p>
                                </div>
                                <div className="alojamiento__precios-show">
                                    <p>Tarifa servicio</p>
                                    <p>U$D100</p>
                                </div>
                            </div>
                        </div>
                        <div className="alojamiento__reservar">
                            <div className="alojamiento__total">
                                <p>Total (U$D)</p>
                                <p>U$D1.420</p>
                            </div>
                            <div className="alojamiento__button-reservar">
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Alojamiento