import React, { useState, useEffect } from "react";
import "./Movies.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import { Header } from "../HeaderComponent";
import { Footer } from "../Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";

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
        if (lsData.foundMovies.length > 0) {
          setMovies(lsData.foundMovies);
        }
        setChecked(lsData.checked);
      }
    }

    return () => {
      setMovies([]);
      setOwnMovies([]);
    };
  }, [currentUser?._id, isSavedMoviesPage]);

  useEffect(() => {
    if (!loggedIn) {
      setOwnMovies([]);
      setMovies([]);
    }

    return () => {
      setOwnMovies([]);
      setMovies([]);
    };
  }, [loggedIn]);

  useEffect(() => {
    setIsLoading(false);
    api
      .fetchMovies()
      .then((res) => {
        setIsLoading(false);
        setOwnMovies(res);
        if (isSavedMoviesPage) setMovies(res);
      })
      .catch((err) => console.log(err));
  }, [isSavedMoviesPage]);

  const searchSubmit = (keyWord, checked = false) => {
    if (isSavedMoviesPage) {
      console.log(ownMovies, movies);

      setOwnMovies((prev) =>
        prev.filter(
          (mov) =>
            mov.nameRU.toLowerCase().includes(keyWord.toLowerCase()) &&
            (checked ? mov.duration <= 40 : true)
        )
      );
      setMovies((prev) =>
        prev.filter(
          (mov) =>
            mov.nameRU.toLowerCase().includes(keyWord.toLowerCase()) &&
            (checked ? mov.duration <= 40 : true)
        )
      );
    } else {
      setIsLoading(true);
      moviesApi
        .fetchMovies()
        .then((movies) => {
          const foundMovies = movies.filter((mov) =>
            mov.nameRU.toLowerCase().includes(keyWord.toLowerCase())
          );
          console.log(foundMovies.length);

          localStorage.setItem(
            currentUser._id,
            JSON.stringify({ keyWord, checked, foundMovies })
          );
          setMovies(foundMovies);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setShowError(true);
        });
    }
  };

  const deleteMovie = (movieId) => {
    api
      .deleteMovie(movieId)
      .then(() => {
        setOwnMovies((prev) => prev.filter((mov) => mov.apiId !== movieId));
        setMovies((prev) => prev.filter((mov) => mov.apiId !== movieId));
      })
      .catch((err) => console.log(err));
  };

  const onCheck = (checked) => {
    setChecked(checked);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm
          searchSubmit={searchSubmit}
          keyWord={locStData?.keyWord ?? ""}
          checked={locStData?.checked}
          onCheck={onCheck}
        />
        <MoviesCardList
          isSavedMoviesPage={isSavedMoviesPage}
          movies={movies.filter((mov) => (checked ? mov.duration <= 40 : true))}
          ownMovies={ownMovies.filter((mov) =>
            checked ? mov.duration <= 40 : true
          )}
          isLoading={isLoading}
          showError={showError}
          deleteMovie={deleteMovie}
        />
      </main>
      <Footer />
    </>
  );
};
