import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import pages
import HomePage from '../components/homePage/HomePage';
import LandingPage from '../components/landingPage/LandingPage'
import SignUpPage from '../components/landingPage/SignUpPage'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/signup' component={SignUpPage} />
            {/* <Route exact path='/forget' component={ForgetPasswordPage} /> */}
            <Redirect />
        </Switch>
    </BrowserRouter>

)