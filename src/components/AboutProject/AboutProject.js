import React from "react";
import './AboutProject.css';


export const AboutProject = () => {

    return (

        <section className="about" id="about">
            <h4 className="about__title">О проекте</h4>
            <div className="about__text">
                <div>
                    <h4 className="about__text_title">Дипломный проект включал 5 этапов</h4>
                    <h5 className="about__text_subtitle">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</h5>
                </div>
                <div>
                    <h4 className="about__text_title">На выполнение диплома ушло 5 недель</h4>
                    <h5 className="about__text_subtitle">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</h5>
                </div>
            </div>
            <div className="progress">
                <div className="progress__bar">1 неделя</div>
                <div className="progress__bar">4 неделя</div>
                <div className="progress__info">Back-end</div>
                <div className="progress__info">Front-end</div>
            </div>
        </section>

    )
};

