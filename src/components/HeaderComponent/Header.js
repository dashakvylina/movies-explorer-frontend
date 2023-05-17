import React from "react";
import logo from "../../images/logo.svg";
import './Header.css';
import { Menu } from '../Menu';
import { Link, useHistory } from 'react-router-dom'


export const Header = ({ loggedIn = false }) => {

    const history = useHistory();

    return (
        <header className="header">
            <Link to={'/'}><img src={logo} className="header__logo" alt="Логотип" /></Link>
            {!loggedIn ?
                <div className="header__account header__account_unlogged">
                    <div className="header__registration-btn" onClick={() => history.push("/signup")}>Регистрация</div>
                    <button className="header__login-btn" onClick={() => history.push("/signin")}>Войти</button>
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
    )
};