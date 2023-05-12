import React from "react";
import './Portfolio.css';
import arrow from "../../images/arrow.svg";
import { Link } from 'react-router-dom'

export const Porfolio = () => {

    return (

        <section className="porfolio">
            <div className="porfolio__text">Портфолио</div>
            <ul className="porfolio__list">
                <li>
                    <Link to="https://dashakvylina.github.io/russian-travel" target="_blank" className="portfolio__about">
                        <div className="porfolio__link">Статичный сайт</div>
                        <img src={arrow} className="porfolio__icon" alt="Стрелка" />
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/dashakvylina/react-mesto-api-full" target="_blank" className="portfolio__about">
                        <div className="porfolio__link">Адаптивный сайт</div>
                        <img src={arrow} className="porfolio__icon" alt="Стрелка" />
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/dashakvylina/movies-explorer-frontend" target="_blank" className="portfolio__about">
                        <div className="porfolio__link">Одностраничное приложение</div>
                        <img src={arrow} className="porfolio__icon" alt="Стрелка" />
                    </Link>
                </li>
            </ul>



        </section >

    )
};
