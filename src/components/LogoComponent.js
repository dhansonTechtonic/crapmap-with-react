import React, { Component } from 'react';
import CrapMapLogo from './crapmapLogoWhite.png';

export default class LogoComponent extends Component {
  render() {
    return (
      <div>
        <img src={CrapMapLogo} className="crapMapLogo"/>
      </div>
    )
  }
}
