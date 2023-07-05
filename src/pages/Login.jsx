import React from 'react';
import logo from '../img/logo.png';
import './styles/Login.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <>
        <div className="login__container">
            <div className="login__formulario">
                <div className="login__logo">
                    <img src={logo} alt="Logo Hotelizar" />
                </div>
                <div className="login__form-container">
                    <div className="login__texto">
                        <h3>Iniciar sesión</h3>
                    </div>
                    <div className="login__inputs">
                        <input type="text" name="usuario" id="" placeholder='Usuario'/>
                        <input type="password" name="password" id="" placeholder='**************'/>
                        <div className="form-login__checkbox">
                            <input type="checkbox" name="" id="recordar" />
                            <label htmlFor="recordar">Recordar</label>
                        </div>
                        <button>Iniciar</button>
                        <u>¿Has olvidado tu contraseña?</u>
                        <p>¿No tienes cuenta? <u>Regístrate acá</u></p>
                        <button className='login__btn-google'>
                            <FcGoogle className='icon__google'/>
                            <p>Iniciá sesión con Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Login