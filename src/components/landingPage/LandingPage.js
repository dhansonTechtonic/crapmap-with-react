import React, { Component } from 'react';
import firebase, {auth} from './../../firebase.js';
// import {FireBase} from './firebaseEmail.js';
import BackgroundComponent from './BackgroundComponent';
import LogoComponent from './LogoComponent';
import LoginComponent from './LoginComponent';
import '../App.css'

import {NavLink, Redirect} from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import SignUpForm from './SignUp'


import store from '../../redux/store'

import {connect} from 'react-redux';


class LandingPage extends Component {
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
    console.log(this.props.user);
    const { user } = store.getState();
    console.log(user);


    if (!user.userID && !user.auth) {
    return (
      <div>
        <div className="landingPage">
          <div className="landingPageGradient">
            <BackgroundComponent />
            <div className="landingPageLogoContainer" > 
              <LogoComponent />
            </div>
              <div className="loginContainer">
                <LoginComponent sendData={this.userLogin} provider={new firebase.auth.GoogleAuthProvider()} providerName={`Google`}/>
                <LoginComponent sendData={this.userLogin} provider={new firebase.auth.FacebookAuthProvider()} providerName={`FaceBook`}/>
                <SignUpForm />
              </div>
          </div>
        </div>
      </div> 
      )
    } else if (user.userID && user.auth) {
      return <Redirect to='/home' />;
    }
  }
}

function mapStateToProps(reduxState){
  console.log(reduxState);
  return {
    user: reduxState.user,
    auth: reduxState.auth
  }
}
  

export default connect(mapStateToProps)(LandingPage);