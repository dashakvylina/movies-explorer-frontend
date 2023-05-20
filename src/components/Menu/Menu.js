import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../images/menu.svg";
import IconCLose from "../../images/close_icon.svg";

import "./Menu.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="menu">
      <button
        type="submit"
        className="menu__button"
        onClick={() => setIsOpen(true)}
      >
        <img src={MenuIcon} className="menu__icon" alt="Меню" />
      </button>
      {isOpen === true ? (
        <div className="menu__wrapper">
          <div className="menu__side">
            <img
              src={IconCLose}
              className="menu__side-close-btn"
              onClick={() => setIsOpen(false)}
              alt="Закрыть"
            />
            <div className="menu__side-container">
              <div className="menu__side-all">
                <Link className="menu__side-link" to={"/"}>
                  Главная
                </Link>
                <Link className="menu__side-link" to={"/movies"}>
                  Фильмы
                </Link>
                <Link className="menu__side-link" to={"/saved-movies"}>
                  {" "}
                  Сохраненные фильмы
                </Link>
              </div>
              <Link to={"/profile"} className="menu__side-btn">
                Аккаунт
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
