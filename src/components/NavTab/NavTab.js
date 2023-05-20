import React from "react";
import "./NavTab.css";

export const NavTab = () => {
  return (
    <div className="navtab">
      <a className="navtab__link" href="#about">
        О проекте
      </a>
      <a className="navtab__link" href="#techs">
        Технологии
      </a>
      <a className="navtab__link" href="#student">
        Студент
      </a>
    </div>
  );
};
