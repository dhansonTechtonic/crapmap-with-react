import React, { Component } from 'react'
import SearchField from '../SearchField.js'

export default class HamburgerMenuModal extends Component {
  render(props) {
    return (
        <div className="hamburger-menu-modal">
            <div>
                <SearchField />
            </div>
            <div>
                <h2 className="my-pins-link">My Pins</h2>
            </div>
            <hr></hr>
            <div>
                 <h2 className="settings-link">Settings</h2>
            </div>
            <hr></hr>
            <div>
                <h2 className="log-out-link">Log Out</h2>
            </div>
        </div>
    )
  }
}
