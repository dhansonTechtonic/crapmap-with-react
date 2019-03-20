import React, { Component } from 'react';
// import { FirebaseContext } from '../../firebase';
import {auth} from './../../firebase.js'

import store from '../../redux/store'
import {registerUser} from '../../redux/actions/userActions'

import {NavLink} from 'react-router-dom';


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => auth.signOut();

  doPasswordReset = email => auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);

  // isAuthentic() {
  //   let status;
  //   if(0 = 0){
  //     status =  true;
  //   } else {
  //     status =  false;
  //   }
  //   return status
  // }

  onSubmit = event => {
    const { email, passwordOne } = this.state;
      this.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        var actionObject = {
          userID: authUser.user.uid,
          // auth: isAuthentic()
          auth: true
        }
        store.dispatch(registerUser(actionObject));

        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });


    event.preventDefault();

  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    
    return (
      <form classname="signUpForm" onSubmit={this.onSubmit}>
        <input
          className="signUpFormInput"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="signUpFormInput"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="signUpFormInput"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          className="signUpFormInput"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        <NavLink exact to='/'><button>back</button></NavLink>


        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//   </p>
// );

// export default SignUpPage;

export default SignUpForm;