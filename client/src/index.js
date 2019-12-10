import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Components/Config/Store";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = <Provider store ={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
ReactDOM.render(app, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
