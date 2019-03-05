import React, { Component } from 'react';
import logo from '../assets/crapmap-logo-horizontal-gray.png'
import {NavLink} from 'react-router-dom'

import SettingsModal from '../settingsModal/SettingsModal'
import MyListingsModal from '../MyListings/MyListingsModal'


export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      settingsIsOpen: false,
      myListingsIsOpen: false
    };
  }

  toggleSettings = () => {
    this.setState({
      settingsIsOpen: !this.state.settingsIsOpen,
      myListingsIsOpen: false
    });
  }

  toggleListings = () => {
    this.setState({
      myListingsIsOpen: !this.state.myListingsIsOpen,
      settingsIsOpen: false
    })
  }

  // toggleModal = (event) => {
  //   var targetID = event.target.id

  //   this.setState({
  //     [targetID]: !this.state.targetID
  //   })
  // }

  render() {
    
    
    return (
    <div className='home-page-body' >
      <img alt='crapmap logo' src={logo} className="home-page-logo"/>

      <nav className="home-page-navbar">
        <ul className="main-nav-list" id="js-menu">

            <li><NavLink exact to='/home' className="nav-links">HOME</NavLink></li>
            <li className="nav-links" onClick={this.toggleListings}>MY PINS</li>
            <li><NavLink exact to='/' className="nav-links">SEARCH</NavLink></li>
            <li className="nav-links" id='settingsIsOpen' onClick={this.toggleSettings}>SETTINGS</li>
            <li><NavLink exact to='/url' className="nav-links">LOGOUT</NavLink></li>
            {/* <li><a href="#" class="hamburger-menu"><HamburgerMenuButton /></a></li> */}
        </ul>
      </nav>

      <SettingsModal show={this.state.settingsIsOpen} onClose={this.toggleSettings}></SettingsModal>
      <MyListingsModal show={this.state.myListingsIsOpen} onClose={this.toggleListings}></MyListingsModal>
    </div>
    )
  }
}
