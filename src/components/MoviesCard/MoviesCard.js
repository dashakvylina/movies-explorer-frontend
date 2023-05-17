import React, { useState, useEffect } from "react";
import './MoviesCard.css';
import saveImg from "../../images/save.svg";
import likedImg from "../../images/saved.svg";
import closeImg from "../../images/closeIcon.svg";
import api from '../../utils/MainApi';
import { formatTime } from '../../utils/formatTime'

export const MoviesCard = ({ movie, isSaved: initSaved, isSavedMoviesPage, deleteMovie }) => {

    const [isLiked, setIsLiked] = useState(initSaved);

    useEffect(() => {
        setIsLiked(initSaved);
    }, [initSaved])



    const saveMovie = () => {
        api.createMovie({ ...movie, image: movie.image.url, thumbnail: movie.image.previewUrl, apiId: movie.id })
            .then(res => {
                setIsLiked(true);
            })
            .catch(err => console.log(err))

    }

    const deleteMovieHandler = () => {

        deleteMovie(movie.apiId)

    }


    return (

        <li className="moviescard">
            <div className="moviescard__info">
                <div className="moviescard__about">
                    <div className="moviescard__name">{movie.nameRU}</div>
                    <div className="movies__length">{formatTime(movie.duration)}</div>
                </div>
                <button className="movies__save-btn" onClick={isSavedMoviesPage ? deleteMovieHandler : saveMovie}>{
                    isSavedMoviesPage ?
                        <img src={closeImg} className="movies__save-img" alt="Удалить" />
                        : <img src={isLiked ? likedImg : saveImg} className="movies__save-img" alt="Сохранить" />
                }
                </button>
            </div>

            <a href={movie.trailerLink} target="_blank" className="moviescard__link" rel="noreferrer">
                <img src={`https://api.nomoreparties.co${isSavedMoviesPage ? movie.image : movie.image.url}`} className="moviescard__img" alt={movie.nameRU} />
            </a>
        </li>
    )
};