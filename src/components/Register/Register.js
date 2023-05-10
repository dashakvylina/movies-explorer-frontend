import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Register.css';


export const Register = () => {

    return (
        <div className="register__signup">
            <img src={logo} className="header__logo header__logo_register" alt="Логотип" />
            <div className="register__text">Добро пожаловать!</div>
            <form className="register__form">
                <span className="register__input-name">Имя</span>
                <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    // value={email}
                    // onChange={(ev) => setEmail(ev.target.value)}
                    className="register__input"
                />
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
                    Зарегистрироваться
                </button>
            </div>
            <div className="register__subtext">
                <span >Уже зарегистрированы?</span>
                <Link to="/signin" className="register__sublink">
                    Войти
                </Link>
            </div>
        </div >
    )
}

