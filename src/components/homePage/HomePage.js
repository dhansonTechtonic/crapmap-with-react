import React, { Component } from 'react';

import store from '../../redux/store/'

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import AddPinModal from '../addEditPin/AddPinModal'
import SortButtons from '../buttons/SortButtons'

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {getPins} from '../../redux/actions/pinActions'
import {registerUser} from '../../redux/actions/userActions'
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pins: [],
      category: 'All'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.target.value) {
      case "car":
        this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
        break;
      case "baseball-ball":
        this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
        break;
      case "tv":
        this.setState({ category: "Electronics" }, () => { console.log(this.state.category) });
        break;
      case "question-circle":
        this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
        break;
      default:
        this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
    }
  }

  componentDidMount(){
    store.dispatch(getPins());
  }

  componentDidUpdate(prevProps){
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }

    // console.log(store.getState());
  }

  render() {

  // USER AUTH LOGIC  
  if (localStorage.getItem('userID')){
    return (
      <div className="App">
        <AddPinModal />
        <SortButtons handleClick={this.handleClick}/>
        <Navigation />
        <GoogleMap  />
      </div>
    );

  } else if (store.getState().user.auth) {

      var storeObject = store.getState().user;

      localStorage.setItem('userID', JSON.stringify(storeObject.userID));

      return (
        <div className="App">
          <AddPinModal />
          <SortButtons handleClick={this.handleClick}/>
          <Navigation />
          <GoogleMap  />
        </div>
    ) 
  } else {
    return <Redirect to='/'/>
  }
  }
}

function mapStateToProps(reduxState){
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(HomePage);