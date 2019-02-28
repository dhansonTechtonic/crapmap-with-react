import React, { Component } from 'react'
import LPBackground from './crapmapLandingPage.png'

export default class BackgroundComponent extends Component {
  render() {
    return (
      <div>
        <img src={LPBackground} className="lpBackground" />
      </div>
    )
  }
}
