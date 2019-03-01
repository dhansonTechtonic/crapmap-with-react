import React, { Component } from 'react';
import logo from '../assets/crapmap-logo-horizontal-gray.png'
import '../App.css'
import HamburgerMenuButton from '../buttons/HamburgerMenuButton'


export default class Navigation extends Component {
 
  render() {
    return (
    <div className='home-page-body' >

    <img src={logo} className="home-page-logo"/>

     <nav className="home-page-navbar">

        <ul className="main-nav-list" id="js-menu">
            <li><a href="#" className="nav-links">HOME</a></li>
            <li><a href="#" className="nav-links">MY PINS</a></li>
            <li><a href="#" className="nav-links">SEARCH</a></li>
            <li><a href="#" className="nav-links">SETTINGS</a></li>
            <li><a href="#" className="nav-links">LOGOUT</a></li>
            <li><a href="#" class="hamburger-menu"><HamburgerMenuButton /></a></li>
        </ul>
      </nav>
    </div>
    )
  }
}
