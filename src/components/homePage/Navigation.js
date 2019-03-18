import React, { Component } from 'react';
import logo from '../assets/crapmap-logo-horizontal-gray.png'
import {NavLink} from 'react-router-dom'
import SettingsModal from '../settingsModal/SettingsModal'
import MyListingsModal from '../MyListings/MyListingsModal'
import HamburgerMenuButton from '../buttons/HamburgerMenuButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconButton} from '@material-ui/core'
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      settingsIsOpen: false,
      myListingsIsOpen: false,
      category: 'All',
      color: '#000',
      active: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleColor.bind(this);
    this.handleClick = this.toggle.bind(this)
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

  handleClick = (e) => {
    switch (e.target.value) {
      case "car":
        this.setState({ category: 'Auto-Parts', color: '#80334f !important' }, () => { console.log(this.state.category, this.state.color) });
        break;
      case "baseball-ball":
        this.setState({ category: "Sporting", color: '#5200e8 !important' }, () => { console.log(this.state.category, this.state.color) });
        break;
      case "tv":
        this.setState({ category: "Electronics", color: '#467290 !important' }, () => { console.log(this.state.category, this.state.color) });
        break;
      case "question-circle":
        this.setState({ category: "Misc", color: '#00ffde !important' }, () => { console.log(this.state.category, this.state.color) });
        break;
      case "couch":
        this.setState({ category: "Furniture", color: '#ff4700 !important' }, () => { console.log(this.state.category, this.state.color) });
        break;
      default:
        this.setState({ category: "All", color: '#000' }, () => { console.log(this.state.category, this.state.color) });
    }
  }

  toggle (position) {
    if (this.state.active === position){
      this.setState({active: null})
    } else {
      this.setState({active: position})
    }
  }

  handleColor (position) {
    if(this.state.active === position){
      return this.state.color
    }
    return '#000'
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
        <div className='nav-categories'>
            <IconButton className="nav-couch-button" onClick={this.handleClick} value="couch" style={{color: this.handleColor(0)}}>
              <FontAwesomeIcon icon="couch" />
            </IconButton>

            <IconButton className="nav-car-button" value="car" onClick={this.handleClick}>
              <FontAwesomeIcon icon="car" />
            </IconButton>

            <IconButton className="nav-sports-button" value="baseball-ball" onClick={this.handleClick}>
              <FontAwesomeIcon icon="baseball-ball" />
            </IconButton>

            <IconButton className="nav-tv-button" value="tv" onClick={this.handleClick}>
              <FontAwesomeIcon icon="tv" />
            </IconButton>


            <IconButton className="nav-random-button" value="question-circle" onClick={this.handleClick}>
              <FontAwesomeIcon icon="question-circle" />
            </IconButton>
        </div>
        <ul className="main-nav-list" id="js-menu">
            <li className="nav-links" onClick={this.toggleListings}>MY PINS</li>
            <li className="nav-links" id='settingsIsOpen' onClick={this.toggleSettings}>SETTINGS</li>
            <li><NavLink exact to='/url' className="nav-links">LOGOUT</NavLink></li>
            <li><a href="#" class="hamburger-menu"><HamburgerMenuButton /></a></li>
        </ul>
      </nav>

      <SettingsModal show={this.state.settingsIsOpen} onClose={this.toggleSettings}></SettingsModal>
      <MyListingsModal show={this.state.myListingsIsOpen} onClose={this.toggleListings}></MyListingsModal>
    </div>
    )
  }
}
