class MoviesApi {
    constructor(options) {
        this._options = options;
    }

    _fetch(url, method, body, headers) {
        return fetch(`${this._options.baseUrl}${url}`, {
            headers: { ...this._options.headers, ...headers },
            method: method,
            body: body ? JSON.stringify(body) : undefined,
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

    fetchMovies() {

        return this._fetch("/beatfilm-movies", "GET");
    }



}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co",
    headers: {
        "Content-Type": "application/json",
    },
});



export default moviesApi;
