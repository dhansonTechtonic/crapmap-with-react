import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
 
export default class GoogleComponent extends Component {

  responseGoogle(response) {
    console.log(response);
  }
 
  render() {
    const {responseGoogle, } = this.props;
    return (
       < GoogleLogin
          clientId = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          icon="fa-google"
          render={renderProps => (
        <button className="google" onClick={renderProps.onClick}>
          {/* < i className = "" > < FontAwesomeIcon icon = "fab fa-google-plus" />
         */} Login with Google
        </button>
      )}
       onSuccess = {responseGoogle}
       onFailure = {responseGoogle}
      //  className="googleBtn"
       />
    )
  }
}