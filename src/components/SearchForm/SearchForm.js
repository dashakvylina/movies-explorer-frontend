import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import find from "../../images/find1.svg";
import findicon from "../../images/find_icon.svg";

export function SearchForm({
  searchSubmit,
  keyWord: keyWordDefault,
  checked,
  onCheck,
}) {
  const [keyWord, setKeyWord] = useState(keyWordDefault);
  const [searchCheck, setSearchCheck] = useState(false);

  const onSubmit = (ev) => {
    ev.preventDefault();
    searchSubmit(keyWord, searchCheck);
  };

  useEffect(() => {
    setKeyWord(keyWordDefault);
    setSearchCheck(checked);
  }, [checked, keyWordDefault]);

  const onCheckHandler = (ev) => {
    setSearchCheck(ev.target.checked);
    onCheck(ev.target.checked);
  };

  return (
    <form className="searchform" onSubmit={onSubmit}>
      <img src={findicon} className="searchform__form-img" alt="Поиск" />
      <input
        className="searchform__form-input"
        type="text"
        placeholder="Фильм"
        required
        value={keyWord}
        onChange={(ev) => setKeyWord(ev.target.value)}
      />
      <button
        className="searchform__form-btn"
        type="submit"
        disabled={keyWord.length === 0}
      >
        <img src={find} className="searchform__trash-img" alt="Корзина" />
      </button>
      <div className="searchform__form-line" />
      <div className="searchform__form-filter">
        <label className="searchform__form-checkbox">
          <input
            type="checkbox"
            checked={searchCheck}
            onChange={onCheckHandler}
          />
          <span className="slider round" />
        </label>
        <div />
        <div className="searchform__form-text">Короткометражки</div>
      </div>
      {keyWord.length === 0 && (
        <span className="searchform__form-mes">
          Нужно ввести ключевое слово
        </span>
      )}
    </form>
  );
}
