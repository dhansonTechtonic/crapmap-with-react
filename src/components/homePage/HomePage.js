import React, { Component } from 'react';

import store from '../../redux/store/'

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import NewPinButton from '../buttons/NewPinButton'

import {connect} from 'react-redux';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pins: []
    };
  }

  componentDidMount(){
    setTimeout(console.log(store.getState()),10000)
  }

  render() {
    return (
      <div className="App">
        <NewPinButton />
        <Navigation />
        <GoogleMap  />
      </div>
    );
  }
}

setTimeout(function () {console.log(store.getState())}, 5000);

function mapStateToProps(reduxState){
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(HomePage);