class MainApi {
  constructor(options) {
    this._options = options;
  }

  _fetch(url, method, body) {
    return fetch(`${this._options.baseUrl}${url}`, {
      headers: this._options.headers,
      method: method,
      credentials: 'include',
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => res);
  }

  fetchUser() {
    return this._fetch("/users/me", "GET");
  }

  fetchMovies() {
    return this._fetch("/movies", "GET");
  }

  createMovie(movie) {
    return this._fetch(`/movies`, "POST", { ...movie });
  }

  deleteMovie(id) {
    return this._fetch(`/movies/${id}`, "DELETE");
  }

  // changeLikeCardStatus(id, isLiked) {
  //   if (isLiked) {
  //     return this.deleteLike(id);
  //   } else {
  //     return this.setLike(id);
  //   }
  // }

  // deleteCard(id) {
  //   return this._fetch(`/cards/${id}`, "DELETE");
  // }

  // editAvatar(link) {
  //   return this._fetch(`/users/me/avatar`, "PATCH", {
  //     avatar: link,
  //   });
  // }

  updateUser(name, email) {
    return this._fetch(`/users/me`, "PATCH", {
      name,
      email,
    });
  }

}

const api = new MainApi({
  // baseUrl: "https://api.students.dasha.nomoredomains.club",
  baseUrl: "http://localhost:3001",
  headers: {
    // authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E0YjM5ZGE4MTUwMDA3YzU4NjVhYTgiLCJpYXQiOjE2NzE3MzgyODcsImV4cCI6MTY3MjM0MzA4N30.2uUeDuzfsWgnnfkrYpJ53cCYkuQrHYFJayEGvjSPnko",
    "Content-Type": "application/json",
  },
});

export default api;


// router.get('/movies', getMovies);

// router.post('/movies', postMoviesValidate, createMovies);

// router.delete(
//   '/movies/:movieId',
//   deleteMoviesValidate,
//   deleteMovies,
// );


// router.get('/users/me', getMe);

// router.patch(
//   '/users/me',
//   patchUserValidatate,
//   updateUser,
// );
