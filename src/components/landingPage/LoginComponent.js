import React, { Component } from 'react';
import firebase, {auth} from './../../firebase.js';
// import './Google.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class GoogleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedIn: null,
      displayName: '',
      email: '',
      uid: 0
    }
    // this.provider = new firebase.auth.GoogleAuthProvider();
    this.login = this.login.bind(this); 
   
  }

  // authWithFacebook() {
  //   app.auth().signInWithPopup(facebookProvider)
  //     .then((user) => {
  //        {
  //         this.props.setCurrentUser(user)
  //         this.setState({
  //           redirect: true
  //         })
  //       }
  //     })
  // }

  // authWithEmailPassword(event) {
  //   event.preventDefault()

  //   const email = this.emailInput.value
  //   const password = this.passwordInput.value

  //   app.auth().fetchProvidersForEmail(email)
  //     .then((providers) => {
  //       if (providers.length === 0) {
  //         // create user
  //         return app.auth().createUserWithEmailAndPassword(email, password)
  //       } else if (providers.indexOf("password") === -1) {
  //         // they used facebook
  //         this.loginForm.reset()
  //         this.toaster.show({
  //           intent: Intent.WARNING,
  //           message: "Try alternative login."
  //         })
  //       } else {
  //         // sign user in
  //         return app.auth().signInWithEmailAndPassword(email, password)
  //       }
  //     })
  //     .then((user) => {
  //       if (user && user.email) {
  //         this.loginForm.reset()
  //         this.props.setCurrentUser(user)
  //         this.setState({
  //           redirect: true
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       this.toaster.show({
  //         intent: Intent.DANGER,
  //         message: error.message
  //       })
  //     })
  // }

  login() {
    auth.signInWithPopup(this.props.provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          userSignedIn: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        });
        this.props.sendData(user);
      }
    );
  }
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          userSignedIn: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid 
        });
      } 
    });
  }

  render() {
    return(
      <div>
        <div>
          <button className='google' onClick={this.login}>{this.props.providerName} Login</button>              
        </div>
       
      </div>
    )
  }
}