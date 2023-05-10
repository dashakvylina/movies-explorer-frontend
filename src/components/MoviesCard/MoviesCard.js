import React from "react";
import './MoviesCard.css';
import saveImg from "../../images/save.svg";
import likedImg from "../../images/saved.svg";
import closeImg from "../../images/delete.svg";
import filmPhoto from "../../images/filmphoto.png";

export const MoviesCard = ({ movie, saved }) => {

    return (

        <div className="moviescard">
            <div className="moviescard__info">
                <div className="moviescard__about">
                    <div className="moviescard__name">{movie.name}</div>
                    <div className="movies__length">{movie.duration}</div>
                </div>
                <button className="movies__save-btn">{
                    saved ?
                        <img src={closeImg} className="movies__save-img" alt="Удалить" />
                        : <img src={movie.isFavorite && !saved ? likedImg : saveImg} className="movies__save-img" alt="Сохранить" />
                }


                </button>
            </div>
            <img src={filmPhoto} className="moviescard__img" alt="Фото из фильма" />
        </div>
    )
};