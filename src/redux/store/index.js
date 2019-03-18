import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'

import rootReducer from '../reducers/rootReducer.js';

// creates store and assigns default value

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;


