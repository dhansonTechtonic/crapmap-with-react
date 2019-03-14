
import pinReducer from './pinReducer'
import { combineReducers } from 'redux'
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  pins: pinReducer
});

export default rootReducer

// the key name will be the data property on the state object