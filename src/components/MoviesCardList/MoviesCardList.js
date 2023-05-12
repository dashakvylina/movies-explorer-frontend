import React from "react";
import './MoviesCardList.css';
import { MoviesCard } from "../MoviesCard";


const movies = [
    {
        id: 1,
        name: 'Название фильма',
        imgUrl: 'https://www.thebalancemoney.com/thmb/dp8pX61p7SyvWM3CPyT_FIR7nSU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/attentive-financial-advisor-talks-with-male-client-1305552368-ee4fd53adf6846809e53773af89ec535.jpg',
        isFavorite: true,
        duration: '1ч 45мин'
    },
    {
        id: 2,
        name: 'Название фильма',
        imgUrl: '../../images/filmphoto.png',
        isFavorite: true,
        duration: '1ч 45мин'
    },
    {
        id: 3,
        name: 'Название фильма',
        imgUrl: '../../images/filmphoto.png',
        isFavorite: false,
        duration: '1ч 45мин'
    },
    {
        id: 4,
        name: 'Название фильма',
        imgUrl: '../../images/filmphoto.png',
        isFavorite: true,
        duration: '1ч 45мин'
    },
    {
        id: 5,
        name: 'Название фильма',
        imgUrl: '../../images/filmphoto.png',
        isFavorite: false,
        duration: '1ч 45мин'
    },
]


export const MoviesCardList = ({ saved }) => {

    return (
        <section className="movies">
            <div className="movies__line"></div>
            <ul className="movies__list">{movies.map(mov => <MoviesCard movie={mov} key={mov.id} saved={saved} />)}</ul>
            <button
                className="movies__more-btn"
                type="button">Еще</button>
        </section>
    )
}