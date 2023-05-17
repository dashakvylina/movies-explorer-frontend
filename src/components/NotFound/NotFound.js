import React from "react";
import './NotFound.css';
import { useHistory } from 'react-router-dom'


export const NotFound = () => {
    const history = useHistory();

    return (
        <div className="notfound__res">
            <div className="notfount__err">404</div>
            <div className="notfound__text">Страница не найдена</div>
            <button type="submit" className="notfound__btn" onClick={() => history.push('/')}>
                Назад
            </button>
        </div>

    )
}