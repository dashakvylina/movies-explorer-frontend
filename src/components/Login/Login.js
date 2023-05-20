import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import logo from "../../images/logo.svg";
import "./Login.css";

export const Login = ({ onSubmit }) => {
  const {
    values: { email: emailValue, password: passValue },
    handleChange,
    errors: { email: emailError, password: pasError },
    isValid,
    resetForm,
  } = useFormWithValidation();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    onSubmit(emailValue, passValue);
    resetForm();
  };

  return (
    <section className="register__signup">
      <img
        src={logo}
        className="header__logo header__logo_register"
        alt="Логотип"
      />
      <div className="register__text">Рады видеть!</div>
      <form onSubmit={handleSubmit}>
        <div className="register__form">
          <span className="register__input-label">E-mail</span>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={emailValue}
            onChange={handleChange}
            className="register__input"
          />
          <span className="register__input-error">{emailError}</span>
          <span className="register__input-label">Пароль</span>
          <input
            required
            id="password"
            name="password"
            type="password"
            value={passValue}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            className="register__input"
          />
          <span className="register__input-error">{pasError}</span>
        </div>
        <button
          type="submit"
          className="register__submit-btn"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <div className="register__subtext">
        <span>Еще не зарегистрированы?</span>
        <Link to="/signup" className="register__sublink">
          Регистрация
        </Link>
      </div>
    </section>
  );
};
