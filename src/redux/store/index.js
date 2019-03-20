import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer.js';

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;


