import React, { Component } from 'react';

=======
>>>>>>> 459c4dbfee79db9710d611697c33c404bec2b333
import firebase, { auth, provider } from './../../firebase.js';
import * as firebaseui from 'firebaseui'
import './Google.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
 

let uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);


export default class GoogleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  responseGoogle(response) {
    console.log(response);
  }
 
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
      }
    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
  
    return (
<<<<<<< HEAD

    <div id="firebaseui-auth-container">  
      {this.state.user ?
        <button onClick={this.logout} className="google">Log Out</button>                
        :
        <button onClick={this.login}>Log In</button> 
>>>>>>> 459c4dbfee79db9710d611697c33c404bec2b333
      }
    </div>
    )
  }
}