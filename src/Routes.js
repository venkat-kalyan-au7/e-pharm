import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import Home from "./components/Home";
import Dashboard from "./Pages/Dashboard"
import PrivateRoute from "./helpers/PrivateRoute"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/login" exact component={LoginPage} />
                <PrivateRoute path='/dashboard' exact component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
