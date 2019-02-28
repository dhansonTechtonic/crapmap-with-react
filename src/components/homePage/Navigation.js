import React, { Component } from 'react';
import logo from '../assets/crapmap-logo-horizontal-gray.png'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
 
  render() {
    return (
    <div className='home-page-body' >

    <img alt='crapmap logo' src={logo} className="home-page-logo"/>

     <nav className="home-page-navbar">

        <ul className="main-nav-list" id="js-menu">
            <li><NavLink exact to='/home' className="nav-links">HOME</NavLink></li>
            <li><NavLink exact to='/' className="nav-links">MY PINS</NavLink></li>
            <li><NavLink exact to='/' className="nav-links">SEARCH</NavLink></li>
            <li><NavLink exact to='/settings' className="nav-links">SETTINGS</NavLink></li>
            <li><NavLink exact to='/url' className="nav-links">LOGOUT</NavLink></li>
            {/* <li><a href="#" class="hamburger-menu"><HamburgerMenuButton /></a></li> */}
        </ul>
      </nav>
    </div>
    )
  }
}
