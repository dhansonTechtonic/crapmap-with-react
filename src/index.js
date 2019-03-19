import React from 'react';
import ReactDOM from 'react-dom';

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

serviceWorker.unregister();
