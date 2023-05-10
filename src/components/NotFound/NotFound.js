import React from "react";
import './NotFound.css';


export const NotFound = () => {

    return (
        <div className="notfound__res">
            <div className="notfount__err">404</div>
            <div className="notfound__text">Страница не найдена</div>
            <button type="submit" className="notfound_btn">
                Назад
            </button>

        </div>

    )
}