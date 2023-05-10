import React from "react";
import './Footer.css';


export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__info">
                <div className="footer__icon">© 2020</div>
                <div className="footer__link">
                    <div>Яндекс.Практикум</div>
                    <div>Github</div>
                </div>
            </div>
        </div>
    )
};