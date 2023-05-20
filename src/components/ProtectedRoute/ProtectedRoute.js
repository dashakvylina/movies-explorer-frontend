import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";

const ProtectedRoute = ({ component: Component, loggedIn, path, ...props }) => {
  const [logged, setLogged] = useState(loggedIn);
  const currentUser = React.useContext(CurrentUserContext);
  console.log({ path, loggedIn, logged, currentUser, props });

  // useEffect(() => {
  //   api
  //     .fetchUser()
  //     .then((res) => {
  //       if (res.email) {
  //         console.log(res);

  //         setLogged(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    !!currentUser && (
      <Route path={path} exact>
        {loggedIn ? (
          <Component {...props} loggedIn={loggedIn} />
        ) : (
          <Redirect to="./signin" />
        )}
      </Route>
    )
  );
};

export default ProtectedRoute;
