import React, { Component } from 'react'
import LPBackground from '../assets/crapmapLandingPage.png'
import '../App.css'

export default class BackgroundComponent extends Component {
  render() {
    return (
      <div>
        <img alt='background' src={ LPBackground } className="lpBackground" />
      </div>
    )
  }
}
