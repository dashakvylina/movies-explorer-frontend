import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Header } from "../HeaderComponent";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

export const Profile = ({ loggedIn, logOut }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const {
    values: { name = currentUser.name, email = currentUser.email },
    handleChange,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    return () => {
      setErr("");
      setInfo("");
    };
  }, []);

  const editProfile = () => {
    api
      .updateUser(name, email)
      .then((res) => {
        if (res._id) {
          setInfo("Профиль сохранен успешно!");
          setDisabledBtn(true);
        }
      })
      .catch((err) => setErr(err));
  };

  useEffect(() => {
    console.log(currentUser.name, name);
    console.log(email, currentUser.email);

    setDisabledBtn(currentUser.name === name && email === currentUser.email);
  }, [name, email, currentUser.name, currentUser.email]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h4 className="profile__title">
          {" "}
          Привет, {currentUser.name ?? "Безымянный"}!{" "}
        </h4>
        <div className="profile__info">
          <form className="profile__form" id="profile-form">
            <div className="profile__name">
              <span>Имя</span>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                className="profile__input"
                minLength={2}
                maxLength={30}
                pattern="[A-Za-zА-Яа-я]+([- ][A-Za-zА-Яа-я]+)?"
                value={name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="profile__email">
              <span>E-mail</span>
              <input
                required
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="profile__input"
                value={email}
                onChange={handleChange}
              ></input>
            </div>
            {info.length > 0 && (
              <span className="profile__mes profile__mes_success">{info}</span>
            )}
            {err.length > 0 && (
              <span className="profile__mes profile__mes_error">{err}</span>
            )}
          </form>
          <div className="profile__link">
            <button
              className="profile__sublink"
              disabled={!isValid || disabledBtn}
              onClick={editProfile}
            >
              Редактировать
            </button>
            <button className="profile__sublink" onClick={logOut}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
