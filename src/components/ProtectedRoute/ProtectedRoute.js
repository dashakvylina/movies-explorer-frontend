import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ component: Component, loggedIn, path, ...props }) => {
  const currentUser = React.useContext(CurrentUserContext);

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
