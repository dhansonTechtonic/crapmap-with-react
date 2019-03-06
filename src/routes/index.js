import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import pages
import HomePage from '../components/homePage/HomePage';
import LandingPage from '../components/landingPage/LandingPage'
import SignUpPage from '../components/landingPage/SignUpPage'
import SignUp from '../components/landingPage/SignUp'


// router takes url and routes it to content
// to-do: modals pop up on current page

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Redirect />
        </Switch>
    </BrowserRouter>
)