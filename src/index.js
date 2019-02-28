import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import './index.css';
import App from './app';

import * as serviceWorker from './serviceWorker';
import LandingPage from './components/LandingPage';


ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
