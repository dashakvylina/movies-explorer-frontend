import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Login.css';


export const Login = () => {

    return (
        <div className="register__signup">
            <img src={logo} className="header__logo header__logo_register" alt="Логотип" />
            <div className="register__text">Рады видеть!</div>
            <form className="register__form">
                <span className="register__input-name">E-mail</span>
                <input
                    required
                    id="email"
                    name="email"
                    type="text"
                    //   value={email}
                    //   onChange={(ev) => setEmail(ev.target.value)}
                    className="register__input"
                />
                <span className="register__input-name">Пароль</span>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    //   value={password}
                    //   onChange={(ev) => setPassword(ev.target.value)}
                    className="register__input"
                />
                <span className="register__input-name">Что-то пошло не так...</span>

            </form>
            <div className="register__button-container">
                <button type="submit" className="register__link">
                    Войти
                </button>
            </div>
            <div className="register__subtext">
                <span >Еще не зарегистрированы?</span>
                <Link to="/signup" className="register__sublink">
                    Регистрация
                </Link>
            </div>




        </div >
    )
}