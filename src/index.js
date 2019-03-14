import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'

import store from "./redux/store"
import {Provider} from 'react-redux'

import './index.css';

import * as serviceWorker from './serviceWorker';
import A2p from './A2p.js';


ReactDOM.render(
        <Provider store={store}>
                <A2p />
        </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
