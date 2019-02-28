import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import firebase, { auth, provider } from './../../firebase.js';
import './Google.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
 
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
    const { user } = this.props
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
    const {responseGoogle, } = this.props;
    const { user } = this.state
    return (
      <div>
       < GoogleLogin
          clientId = "942646979397-dh35rh2acm6g4her264t59s12usmevm8.apps.googleusercontent.com"
          icon="fa-google"
          render={renderProps => (
            // user ?
              <button onClick={this.login} className="google" 
              onClick={renderProps.onClick}> Login with Google</button>
              ||
              <button onClick={this.logout} className="google" 
              onClick={renderProps.onClick}>Log Out</button>  
            )}
       onSuccess = {responseGoogle}
       onFailure = {responseGoogle}
       />
      
     </div>
    )
  }
}