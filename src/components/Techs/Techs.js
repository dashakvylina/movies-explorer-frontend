import React from "react";
import './Techs.css';


export const Techs = () => {

    return (
        <section className="techs" id="techs">
            <h4 className="techs__title">Технологии</h4>
            <div className="techs__info">
                <h2 className="techs__subtitle">7 технологий</h2>
                <h5 className="techs__text">На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.</h5>
            </div>
            <div className="techs__progress">
                <div className="techs__icon">HTML</div>
                <div className="techs__icon">CSS</div>
                <div className="techs__icon">JS</div>
                <div className="techs__icon">REACT</div>
                <div className="techs__icon">GIT</div>
                <div className="techs__icon">Express.js</div>
                <div className="techs__icon">mongoDB</div>
            </div>

        </section>
    )
}