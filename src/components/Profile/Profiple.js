import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";
import { Header } from '../HeaderComponent';



export const Profile = () => {

    return (
        <>
            <Header />
            <main className="profile">
                <h4 className="profile__title"> Привет, Дарья! </h4>
                <div className="profile__info">
                    <form className="profile__form">
                        <div className="profile__name">
                            <span>Имя</span>
                            <input required
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Имя"
                                className="profile__input"
                            ></input></div>
                        <div className="profile__email">
                            <span>E-mail</span>
                            <input required
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                className="profile__input"
                            ></input>
                        </div>

                    </form>
                    <div className="profile__link">
                        <Link to="/" className="profile__sublink">
                            Редактировать
                        </Link>
                        <Link to="/" className="profile__sublink">
                            Выйти из аккаунта
                        </Link>
                    </div >
                </div>
            </main >
        </>
    )
}