import React from "react";
import './SearchForm.css';
import find from "../../images/find1.svg";
import findicon from "../../images/find_icon.svg";

export const SearchForm = () => {

    return (

        <div className="searchform">
            <img src={findicon} className="searchform__form-img" alt="Поиск" />
            <input className="searchform__form-input" type="text" placeholder="Фильм" />
            <button className="searchform__form-btn" type="submit">
                <img src={find} className="element__trash-img" alt="Корзина" />
            </button>
            <div className="searchform___form-line"></div>
            <div className="searchform__form-filter">
                <label className="searchform__form-checkbox">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <div></div>
                <div className="searchform__form-text">Короткометражки</div>
            </div>
        </div>

    )
}