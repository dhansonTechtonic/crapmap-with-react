import React, { Component } from 'react';
import firebase from './../../firebase.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './Google.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class GoogleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: null,
      name: '',
      email: '',
      photoURL: '',
      uid: 0
    }
  }

  provider = new firebase.auth.GoogleAuthProvider();

 

  uiConfig = {
    signInSuccessUrl: '/signIn',
    signInflow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    },
    callbacks: {
      signInSuccess: () => false,
    }
  };

  
  
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) =>{
          this.setState({
            isSignedIn: !!user,
             user: user,
          })
        } 
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {

    if (!this.state.isSignedIn) {
      return (
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</h1>
        <button><a onClick={() => firebase.auth().signOut()}>Sign-out</a></button>
      </div>
    );
  
  }
}