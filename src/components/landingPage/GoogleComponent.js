import React, { Component } from 'react';
import * as firebaseui from 'firebaseui'
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
    <div>  
      {this.state.user ?
      <button onClick={this.logout} className="google">Log Out</button>                
      :
      <button onClick={this.login} className="google">Login w/ Google</button> 
      }
    </div>
    )
  }
}