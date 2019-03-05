import React, { Component } from 'react';
import firebase, {auth} from './../../firebase.js';
import BackgroundComponent from './BackgroundComponent';
import LogoComponent from './LogoComponent';
import LoginComponent from './LoginComponent';
import "./LandingPage.css";

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
              <LoginComponent sendData={this.userLogin} provider={new firebase.auth.GoogleAuthProvider()} providerName={`Google`}/>                
          </div>
        </div>
      :
      <div className="landingPage">
        <div className="landingPageGradient">
          <BackgroundComponent />
          <div className="landingPageLogoContainer" > 
            <LogoComponent />
          </div>
            <button className='google' onClick={this.logOut}>Log Out</button> 
        </div>
      </div>
      
      }
      </div>
      
    )
  }
}
