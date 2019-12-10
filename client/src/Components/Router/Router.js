import React from "react";
import {Switch, Route} from "react-router-dom";
import store from "../Config/Store";
import Acceuil from "../Acceuil";
import Inventaire from "../Inventaire";
import Collections from "../Collections";
import Commande from "../Commande"
import Contacts from "../Contacts"
import Register from "../Register/Register";
import Login from "../Login/";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "../Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../Utils/authActions";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

const Router =()=>(
    <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/inventaire" component={Inventaire} />
        <PrivateRoute exact path="/contacts" component={Contacts} />
        <PrivateRoute exact path="/collections" component={Collections} />
        <PrivateRoute exact path="/commande" component={Commande} />
        <PrivateRoute exact path="/contact" component={Contacts} />


    </Switch>
)

export default Router;