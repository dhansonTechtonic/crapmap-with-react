import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import pages
import HomePage from '../components/homePage/HomePage';
import LandingPage from '../components/landingPage/LandingPage'

// import modals
import EditPinModal from '../components/addEditPin/EditPinModal'
import AddPinModal from '../components/addEditPin/AddPinModal'
import SettingsModal from '../components/settingsModal/SettingsModal'


// router takes url parameters and displays them
// to-do: modals pop up on current page

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/addpin' component={AddPinModal} />
            <Route exact path='/editpin' component={EditPinModal} />
            <Route exact path='/settings' component={SettingsModal} />
        </Switch>
    </BrowserRouter>
)