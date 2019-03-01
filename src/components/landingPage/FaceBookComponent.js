import React, { Component } from 'react';
import firebase, { auth, provider} from './../../firebase.js';
// mport FacebookLogin from 'react-facebook-login';
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './Facebook.css'

export default class FacebookComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      displayName: '',
      email: '',
      photoURL: '',
      uid: 0
    }
    this.provider = new firebase.auth.FacebookAuthProvider()
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
  }

  login() {
    auth.signInWithPopup(this.provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        });
        this.props.sendData(this.props.val);
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          displayName: '',
          email: '',
          photoURL: '',
          uid: 0
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          user: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid 
        });
      } 
    });
  }

  render() {
    return (
      <button className="faceBookComponentStyle" 
      onClick={this.login} sendData={this.state.user}>
      <span icon="fa-facebook"></span>
        Login with Facebook
      </button>
    ) 
  }
}
