import React, { Component } from 'react';
import logo from '../assets/crapmap-logo-horizontal-gray.png'
import {NavLink} from 'react-router-dom'
import MyListingsModal from '../MyListings/MyListingsModal'
import SideMenu from './SideMenu'
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // settingsIsOpen: false,
      myListingsIsOpen: false,
      category: 'All',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  toggleListings = () => {
    this.setState({
      myListingsIsOpen: !this.state.myListingsIsOpen,
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
            <li className="nav-links" onClick={this.toggleListings}>MY PINS</li>
            <li><NavLink exact to='/url' className="nav-links">LOGOUT</NavLink></li>
            <li onClick={this.toggleHamburger} class="hamburger-menu"><SideMenu /></li>
        </ul>
      </nav>
      <MyListingsModal show={this.state.myListingsIsOpen} onClose={this.toggleListings}></MyListingsModal>
    </div>
    )
  }
}
