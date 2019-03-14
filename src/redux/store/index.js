import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

// creates store and assigns default value
const store = createStore(rootReducer);

export default store;


