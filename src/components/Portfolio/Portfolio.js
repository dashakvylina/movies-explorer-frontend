import React from "react";
import './Portfolio.css';
import arrow from "../../images/arrow.svg";

export const Porfolio = () => {

    return (

        <div className="porfolio">
            <div className="porfolio__text">Портфолио</div>
            <div className="portfolio__about">
                <div className="porfolio__link">Статичный сайт</div>
                <img src={arrow} className="porfolio__icon" alt="Стрелка" />
            </div>
            <div className="portfolio__about">
                <div className="porfolio__link">Адаптивный сайт</div>
                <img src={arrow} className="porfolio__icon" alt="Стрелка" />
            </div>
            <div className="portfolio__about">
                <div className="porfolio__link">Одностраничное приложение</div>
                <a href=""> <img src={arrow} className="porfolio__icon" alt="Стрелка" /></a>
            </div>
        </div>

    )
};
