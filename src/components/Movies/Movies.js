
import React, { useState, useEffect } from "react";
import './Movies.css';
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from '../MoviesCardList';
import { Header } from '../HeaderComponent';
import { Footer } from '../Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import moviesApi from '../../utils/MoviesApi'
import api from '../../utils/MainApi'

export const Movies = ({ isSavedMoviesPage, loggedIn }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const [isLoading, setIsLoading] = useState(false);

    const [showError, setShowError] = useState(false);
    const [locStData, setLocStData] = useState(null);
    const [ownMovies, setOwnMovies] = useState([]);

    const [movies, setMovies] = useState([]);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (!isSavedMoviesPage) {
            const data = localStorage.getItem(currentUser?._id);
            if (data) {
                const lsData = JSON.parse(data);
                if (lsData) setLocStData(lsData);
                if (lsData.foundMovies.length > 0) setMovies(lsData.foundMovies);
            }
        }
    }, [currentUser?._id, isSavedMoviesPage]);

    useEffect(() => {
        if (!loggedIn) {
            setOwnMovies([]);
            setMovies([]);

        }

        return () => {
            setOwnMovies([]);
            setMovies([]);
        }
    }, [loggedIn])

    useEffect(() => {
        setIsLoading(false);
        api.fetchMovies().then(res => {
            setIsLoading(false);
            setOwnMovies(res);
            if (isSavedMoviesPage) setMovies(res);
        });
    }, [isSavedMoviesPage])


    const searchSubmit = (keyWord, checked = false) => {

        if (isSavedMoviesPage) {
            console.log(ownMovies, movies);

            setOwnMovies(prev => prev.filter(mov => mov.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (mov.duration <= 40) === checked));
            setMovies(prev => prev.filter(mov => mov.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (mov.duration <= 40) === checked));
        } else {
            setIsLoading(true);
            moviesApi
                .fetchMovies()
                .then(movies => {
                    const foundMovies =
                        movies.filter(mov => mov.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (mov.duration <= 40) === checked);
                    localStorage.setItem(currentUser._id, JSON.stringify({ keyWord, checked, foundMovies }))
                    setMovies(foundMovies);
                    setIsLoading(false);
                }).catch(err => {
                    setIsLoading(false);
                    setShowError(true);
                });
        }


    }

    const deleteMovie = (movieId) => {
        api.deleteMovie(movieId)
            .then(() => {
                setOwnMovies(prev => prev.filter(mov => mov.apiId !== movieId));
                setMovies(prev => prev.filter(mov => mov.apiId !== movieId));

            })
            .catch(err => console.log(err));

    }

    const onCheck = (checked) => {
        setChecked(checked);
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="main">
                <SearchForm
                    searchSubmit={searchSubmit}
                    keyWord={locStData?.keyWord ?? ""}
                    checked={locStData?.checked}
                    onCheck={onCheck} />
                <MoviesCardList
                    isSavedMoviesPage={isSavedMoviesPage}
                    movies={movies.filter(mov => (mov.duration <= 40) === checked)}
                    ownMovies={ownMovies.filter(mov => (mov.duration <= 40) === checked)}
                    isLoading={isLoading}
                    showError={showError}
                    deleteMovie={deleteMovie} />
            </main>
            <Footer />
        </>)


};
