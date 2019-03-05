import React, { Component } from 'react';

import './HomePage.css';

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
class HomePage extends Component {

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

export default HomePage;