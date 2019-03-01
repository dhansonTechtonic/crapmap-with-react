import React, { Component } from 'react';

import BackgroundComponent from './BackgroundComponent';
import LogoComponent from './LogoComponent';
import GoogleComponent from './GoogleComponent';
import FaceBookComponent from './FaceBookComponent';

import './App.css'


export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    /* just thoughts for what might need to change in state
      isNewUser: true,
      loggedIn: false,
      */
    }
  }

  render() {
    return (
      <div className="landingPage">
        <div className="landingPageGradient">
          <BackgroundComponent />

          <div className="landingPageLogoContainer" > 
            <LogoComponent />
          </div>

          < div className="googleComponentStyle">
            <GoogleComponent />
          </div>

          <div className="faceBookComponentStyle">
            <FaceBookComponent />
          </div>

        </div>
      </div>
      
    )
  }
}


