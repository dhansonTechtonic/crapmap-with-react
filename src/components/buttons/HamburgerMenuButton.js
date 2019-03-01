import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

export default class HamburgerMenuButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="hamburger-menu-button" icon="bars" />
      </div>
    )
  }
}
