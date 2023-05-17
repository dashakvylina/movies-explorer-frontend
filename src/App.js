import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, useHistory, Switch } from "react-router-dom";
import { Main } from './components/Main';
import { Movies } from './components/Movies';
import { Profile } from './components/Profile/Profiple';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { NotFound } from './components/NotFound/NotFound';
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import auth from "./utils/AuthApi";
import api from "./utils/MainApi";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {

    api
      .fetchUser()
      .then((res) => {
        if (res.email) {
          setCurrentUser(res);
          setLoggedIn(true);
        }

      })
      .catch((err) => console.log(err));
  }, [history, loggedIn]);

  const onLoginSubmit = (username, password) => {
    auth
      .fetchSignIn(password, username)
      .then((res) => {

        if (Object.keys(res).length === 0) {
          setLoggedIn(true); // обновляем стейт внутри App.js
          history.push("/movies"); // и переадресуем пользователя!
        }
      })
      .catch((err) => console.log(err));
  };

  const onRegisterSubmit = (values) => {

    auth
      .fetchSignUp(values.password, values.email, values.name)
      .then((res) => {

        console.log('res', res);

        if (res.hasOwnProperty("_id")) {
          setLoggedIn(true); // обновляем стейт внутри App.js
          history.push("/movies"); // и переадресуем пользователя!
        }
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    auth.signout().then(() => {
      history.push('/');
      setCurrentUser(null);
      setLoggedIn(false);
    })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/signin">
          <Login onSubmit={onLoginSubmit} />
        </Route>
        <Route exact path="/signup">
          <Register onRegisterSubmit={onRegisterSubmit} />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/movies" component={Movies} isSavedMoviesPage={false}></ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies" component={Movies} isSavedMoviesPage={true}></ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/profile" component={Profile} logOut={logOut}></ProtectedRoute>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </CurrentUserContext.Provider>

  )
};


export default App;
