import React, { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './App.css'

export default class FacebookComponent extends Component {

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    const {responseFacebook, } = this.props;

    return (
      <FacebookLogin
        appId = "1088597931155576"
        autoLoad={true}
        fields = "name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <button className="faceBookComponentStyle" 
          onClick={renderProps.onClick}>
          <span icon="fa-facebook"></span>
            Login with Facebook
          </button>
        )}
      />
    ) 
  }
}
