import React, { Component } from 'react';

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

import {connect} from 'react-redux';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pins: []
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation /> 
        <SearchBar />
        <GoogleMap />
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  console.log(reduxState);
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(HomePage);