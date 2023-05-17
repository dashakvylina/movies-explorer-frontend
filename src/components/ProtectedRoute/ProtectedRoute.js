import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, path, ...props }) => {

    return (
        <Route path={path}>{loggedIn ? <Component {...props} loggedIn={loggedIn} /> : <Redirect to="./signin" />}</Route>
    );
};

export default ProtectedRoute;
