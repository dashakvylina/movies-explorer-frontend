class MainApi {
  constructor(options) {
    this._options = options;
  }

  _fetch(url, method, body) {
    return fetch(`${this._options.baseUrl}${url}`, {
      headers: this._options.headers,
      method: method,
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => res)
      .catch((err) => console.log(err));
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

  updateUser(name, email) {
    return this._fetch(`/users/me`, "PATCH", {
      name,
      email,
    });
  }
}

const api = new MainApi({
  // baseUrl: "https://api.students.dasha.nomoredomains.club/users/me",
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
