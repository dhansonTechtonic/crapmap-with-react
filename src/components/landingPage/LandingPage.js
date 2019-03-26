import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import firebase, { auth } from './../../firebase.js';
import BackgroundComponent from './BackgroundComponent';
import LogoComponent from './LogoComponent';
import LoginComponent from './LoginComponent';
import '../App.css'

import EmailLoginForm from './EmailSignIn'
import ForgetPasswordForm from './ForgetPassword'

import { connect } from 'react-redux';
import store from '../../redux/store'




class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.title = "CrapMap | Log-In"
  }

  userLogin = userData => this.setState({ user: userData })

  logOut = () => {
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

  componentDidUpdate = () => <Redirect to='/' />

  render() {
    const { user } = store.getState();
    const auth = store.getState();

    if (auth.user.userID) return <Redirect to = "/home" />

    if (!user.userID && !user.auth) {
    return (
        <div className="landingPage">
          <div className="landingPageGradient">
            <BackgroundComponent />
            <div className="landingPageLogoContainer" > 
              <LogoComponent />
            </div>
            <div className="loginContainer">
              <LoginComponent sendData={ this.userLogin } provider={ new firebase.auth.GoogleAuthProvider() } providerName={ `Google` }/>
              <LoginComponent sendData={ this.userLogin } provider={ new firebase.auth.FacebookAuthProvider() } providerName={ `FaceBook` }/>
              <EmailLoginForm />
              <ForgetPasswordForm/>
            </div>
          </div>
        </div>
      )
    } else if (user.userID && user.auth) {
      return <Redirect to='/home' />;
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    auth: reduxState.auth
  }
}
  
export default connect(mapStateToProps)(LandingPage);