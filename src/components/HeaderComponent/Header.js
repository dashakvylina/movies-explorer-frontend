import React from "react";
import logo from "../../images/logo.svg";
import './Header.css';
import { Menu } from '../Menu';
import { Link } from 'react-router-dom'



export const Header = ({ inLogged = true }) =>
(
    <header className="header">
        <Link to={'/'}><img src={logo} className="header__logo" alt="Логотип" /></Link>
        {!inLogged ?
            <div className="header__account header__account_unlogged">
                <div className="header__registration">Регистрация</div>
                <div className="header__input">Войти</div>
            </div>
            :
            <>
                <div className="header__account header__account_logged">
                    <div className="header__films">
                        <Link to={'/movies'} className="header__link">Фильмы</Link>
                        <Link to={'/saved-movies'} className="header__link">Сохраненные фильмы</Link>
                    </div>

                    <Link className="header__me" to={'/profile'}>Аккаунт</Link>
                </div>
                <Menu />
            </>
        }
    </header >
);