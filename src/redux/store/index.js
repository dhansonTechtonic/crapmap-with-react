import {createStore} from 'redux';
// import pinReducer from '../reducers/pinReducer.js';
import userReducer from '../reducers/userReducer.js';



// creates store and assigns default value
const store = createStore(userReducer);

export default store;


