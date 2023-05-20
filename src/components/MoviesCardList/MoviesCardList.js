import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";
import Preloader from "../Preloader/Preloader";

//  1280 > 3
// 768 -1279 - 2
// < 768 - 5  -2

const detectCount = (screenWidth) => {
  if (screenWidth >= 1280) return { initCount: 12, delta: 3 };
  if (screenWidth < 1280 && screenWidth >= 768)
    return { initCount: 8, delta: 2 };
  else return { initCount: 5, delta: 2 };
};

export const MoviesCardList = ({
  isSavedMoviesPage = false,
  movies,
  isLoading = true,
  showError,
  ownMovies,
  deleteMovie,
}) => {
  const [initMovies, setInitMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);

  const { initCount, delta } = detectCount(window.innerWidth);

  useEffect(() => {
    setInitMovies([...movies].slice(initCount, movies.length));
    setVisibleMovies([...movies].slice(0, initCount));
  }, [initCount, movies]);

  const showMore = () => {
    setVisibleMovies((prev) => [...prev, ...initMovies.slice(0, delta)]);
    setInitMovies((prev) => prev.slice(delta, movies.length));
  };

  return (
    <section className="movies">
      <div className="movies__line"></div>
      {showError && (
        <h5 className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h5>
      )}
      {isLoading ? (
        <Preloader />
      ) : visibleMovies.length > 0 ? (
        <>
          <ul
            className={`movies__list ${
              initMovies.length === 0 ? "movies__list_mb" : ""
            }`}
          >
            {visibleMovies.map((mov) => (
              <MoviesCard
                movie={mov}
                key={mov.id}
                isSavedMoviesPage={isSavedMoviesPage}
                isSaved={ownMovies.some((movie) => movie.apiId === mov.id)}
                deleteMovie={deleteMovie}
              />
            ))}
          </ul>
          {initMovies.length > 0 && (
            <button
              onClick={showMore}
              className="movies__more-btn"
              type="button"
            >
              Еще
            </button>
          )}
        </>
      ) : (
        <h5>Ничего не найдено</h5>
      )}
    </section>
  );
};
