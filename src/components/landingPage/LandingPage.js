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
import { loginUser, logOutUser} from '../../redux/actions/userActions'




class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.title = "CrapMap | Log-In"
    console.log('mountin')
    auth.onAuthStateChanged(user => {
      console.log("auth state changed");
      //TODO-1
      if (user) {
        console.log(user);
        console.log('in auth if')
        // this.setState({ 
        //   userSignedIn: !!user,
        //   displayName: user.displayName,
        //   email: user.email,
        //   uid: user.uid,
        //   emailVerified: user.emailVerified
        // });
        // var userStoreObject = {
        //   emailVerified: user.emailVerified
        // }
        store.dispatch(loginUser(user));
      } else {
        console.log('in auth else')
        store.dispatch(logOutUser(user));
      }
    });
  }

  userLogin = userData => {
    console.log(userData)
  }

  logOut = () => {
    auth.signOut()
  }

  render() {
    const { user } = store.getState();
    console.log(user);

    //TODO LIST:
    // 1. grab useful values off the user object coming from onAuthStateChanged method "see TODO-1"
    // 2. once redux store is organized and all data is available handle conditional renders and routing
    // 3. deal with indexedDB firebase auth entry so that you wont automatically reroute to homepage for last logged in individual

    if (user.auth && !user.emailVerified) {
      // console.log('in !emailauth conditional')
      console.log(`auth is ${user.auth}, email verify is ${user.emailVerified}`)
      return (
        <div className="landingPage">
          <div className="landingPageGradient">
            <BackgroundComponent />
            <div className="landingPageLogoContainer" >
              <LogoComponent />
            </div>
            <div className="verifyMsgContainer" >
              <div className="verifyMsg">Please check your email and click the link to verify your account</div>
            </div>
            <div className="loginContainer">
              <LoginComponent sendData={this.userLogin} provider={new firebase.auth.GoogleAuthProvider()} providerName={`Google`} />
              <LoginComponent sendData={this.userLogin} provider={new firebase.auth.FacebookAuthProvider()} providerName={`FaceBook`} />
              <EmailLoginForm />
              <ForgetPasswordForm />
            </div>
          </div>
        </div>
      )
    } 
    else if (!user.emailVerified && !user.auth) {
        console.log(`auth is ${user.auth}, email verify is ${user.emailVerified}`)
        // console.log('email is not verified and user is not authed')
        return (
          <div className="landingPage">
            <div className="landingPageGradient">
              <BackgroundComponent />
              <div className="landingPageLogoContainer" >
                <LogoComponent />
              </div>
              {/* <div className="verifyMsgContainer" >
                <div className="verifyMsg">Please check your email and click the link to verify your account</div>
              </div> */}
              <div className="loginContainer">
                <LoginComponent sendData={this.userLogin} provider={new firebase.auth.GoogleAuthProvider()} providerName={`Google`} />
                <LoginComponent sendData={this.userLogin} provider={new firebase.auth.FacebookAuthProvider()} providerName={`FaceBook`} />
                <EmailLoginForm />
                <ForgetPasswordForm />
              </div>
            </div>
          </div>
        )
      } 
      else {
        console.log(`auth is ${user.auth}, email verify is ${user.emailVerified}`)
        // console.log('redirect to home w/emailVeri and userAuth')
        return <Redirect to='/home' />;
      }
    } 
  }


function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    auth: reduxState.auth,
    verify: reduxState.user.emailVerified
  }
}
  
export default connect(mapStateToProps)(LandingPage);