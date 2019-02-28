import React, { Component } from 'react';
import CrapMapLogo from './assets/crapmapLogoWhite.png';

export default class LogoComponent extends Component {
  render() {
    return (
      <div>
        <img src={CrapMapLogo} className="crapMapLogo"/>
      </div>
    )
  }
}
