import React, { Component } from 'react';
import logo from './logo.svg';
import './HomePage.css';
import GoogleMap from './Component/GoogleMap';
import Navigation from './Component/Navigation';
import SearchBar from './Component/SearchBar';

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

export default App;
