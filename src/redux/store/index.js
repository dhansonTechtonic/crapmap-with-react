import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer.js';



const store = createStore(rootReducer, compose(
  applyMiddleware(promise),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;


