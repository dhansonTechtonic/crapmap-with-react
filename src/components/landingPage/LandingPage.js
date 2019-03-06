import React, { Component } from 'react';
import firebase, {auth} from './../../firebase.js';
// import {FireBase} from './firebaseEmail.js';
import BackgroundComponent from './BackgroundComponent';
import LogoComponent from './LogoComponent';
import LoginComponent from './LoginComponent';
import '../App.css'
import {NavLink} from 'react-router-dom'

import SignUpPage from './SignUpPage.js';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: null
    };
  this.logOut = this.logOut.bind(this);
  }


  userLogin = (userData) =>{
    this.setState({
      user: userData,
    })
  }

  logOut() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          displayName: '',
          email: '',
          uid: 0
        });
      });
  }

  render() {
    return (
      <div>
      {!this.state.user ?
        <div className="landingPage">
          <div className="landingPageGradient">
            <BackgroundComponent />
            <div className="landingPageLogoContainer" > 
              <LogoComponent />
            </div>
            <div className="loginContainer">
              <LoginComponent sendData={this.userLogin} provider={new firebase.auth.GoogleAuthProvider()} providerName={`Google`}/>
              <LoginComponent sendData={this.userLogin} provider={new firebase.auth.FacebookAuthProvider()} providerName={`FaceBook`}/>
              <NavLink exact to="/signup">
                <button>  
                  Sign-Up/Login with Email
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      :
      <div className="landingPage">
        <div className="landingPageGradient">
          <BackgroundComponent />
          <div className="landingPageLogoContainer" > 
            <LogoComponent />
          </div>
        </div>
      </div>
      
      }
      </div>
      
    )
  }
}
