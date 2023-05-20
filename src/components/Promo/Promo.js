import React from "react";
import "./Promo.css";
import { NavTab } from "../NavTab";

export const Promo = () => {
  return (
    <section className="banner">
      <h1 className="banner__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab />
    </section>
  );
};
