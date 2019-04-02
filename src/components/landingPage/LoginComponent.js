import React, { Component } from 'react';
import firebase, { auth } from './../../firebase.js';

import Fab from '@material-ui/core/Fab'

import store from '../../redux/store';
import { registerUser, loginUser } from '../../redux/actions/userActions'

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSignedIn: null,
      displayName: '',
      email: '',
      uid: 0
    }

    // this.provider = new firebase.auth.GoogleAuthProvider() || new firebase.auth.FacebookAuthProvider();
    this.login = this.login.bind(this); 
  }

  login = () => {
    auth.signInWithPopup(this.props.provider) 
    .then((userData) => {
      // const user = result.user;

      var actionObject = {
        uid: userData.user.uid,
        auth: true,
        emailVerified: userData.user.emailVerified
      }

      store.dispatch(loginUser(actionObject));
      this.props.sendData(userData);
    });
  }

  render() {
    const { providerName } = this.props
    return(
      <div>
        <Fab 
          style={{
            width:210, 
            borderRadius:4, 
            margin: 10, 
            opacity: 1,
          }}
          onClick={ this.login }
        >Login with { providerName } 
        </Fab>              
      </div>
    )
  }
}