import React, { Component } from 'react';
import CrapMapLogo from '../assets/crapmapLogoWhite.png';
import './App.css'
export default class LogoComponent extends Component {
  render() {
    return (
      <div>
        <img alt='crapmap logo' src={CrapMapLogo} className="crapMapLogo"/>
      </div>
    )
  }
}
