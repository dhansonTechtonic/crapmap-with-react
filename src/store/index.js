import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {
    // key: 'value'
};

// creates store and assigns default value
export const store = createStore(reducer, initialState);