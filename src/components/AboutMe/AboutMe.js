import React from "react";
import "./AboutMe.css";
import photo from "../../images/test.jpeg";

export const AboutMe = () => {
  return (
    <section className="student" id="student">
      <h4 className="student__title">Студент</h4>
      <div className="student__about">
        <div className="student__about_desc">
          <div className="student__about_text">
            <h2 className="student__about-name">Дарья</h2>
            <h3 className="student__about-work">
              Фронтенд-разработчик, 32 года
            </h3>
            <h5 className="student__about-life">
              Я родилась и живу в Саратове, закончила факультет экономики СГУ. У
              меня есть сын. Я люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начала кодить. С 2015 года работал в компании «АО РЖД».
              После того, как прошла курс по веб-разработке, начала заниматься
              фриланс-заказами и ушла с постоянной работы.
            </h5>
          </div>
          <a
            className="student__about_link"
            href="https://github.com/dashakvylina"
          >
            Github
          </a>
        </div>

        <img src={photo} className="student__photo" alt="Мое фото" />
      </div>
    </section>
  );
};
