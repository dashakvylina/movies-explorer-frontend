import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Register.css';
import { useFormWithValidation } from '../../utils/useFormWithValidation'

export const Register = ({ onRegisterSubmit }) => {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // здесь обработчик регистрации

        onRegisterSubmit(values);  // {name: '', email: '', }
        resetForm();
    };

    // const handleClose = () => {
    //     onClose();
    //     if (!isErrorResponse) {
    //         setEmail("");
    //         setPassword("");
    //         history.push("/signin");
    //     }


    return (
        <main className="register__signup">
            <img src={logo} className="header__logo header__logo_register" alt="Логотип" />
            <div className="register__text">Добро пожаловать!</div>
            <form onSubmit={handleSubmit} className="register__form">
                <span className="register__input-label">Имя</span>
                <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    className="register__input"
                    pattern='[A-Za-zА-Яа-я]+([- ][A-Za-zА-Яа-я]+)?'
                />
                <span className="register__input-error">{errors.name}</span>
                <span className="register__input-label">E-mail</span>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className="register__input"
                />
                <span className="register__input-error">{errors.email}</span>
                <span className="register__input-label">Пароль</span>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    className="register__input"
                    minLength={2}
                />
                <span className="register__input-error">{errors.password}</span>


                <button type="submit" className="register__submit-btn" disabled={!isValid}>
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__subtext">
                <span >Уже зарегистрированы?</span>
                <Link to="/signin" className="register__sublink">
                    Войти
                </Link>
            </div>
        </main >
    )
}


