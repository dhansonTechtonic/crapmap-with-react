import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import pages
import HomePage from '../components/homePage/HomePage';
import LandingPage from '../components/landingPage/LandingPage'
import SignUpPage from '../components/landingPage/SignUpPage'
import SignUp from '../components/landingPage/SignUp'

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'


// router takes url and routes it to content

// const store = createStore(() => [], {}, applyMiddleware());

export default () => (
    <BrowserRouter>
  {/* <Provider store={store}> */}
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Redirect />
        </Switch>
  {/* </Provider> */}
    </BrowserRouter>

)