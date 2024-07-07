import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/store'
import {Provider} from "react-redux";
import RoutePath from "./Route";

ReactDOM.render(
    <Provider store={store}>
        <RoutePath />
    </Provider>,
    document.getElementById('root')
);
