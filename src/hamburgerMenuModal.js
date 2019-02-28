import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HamburgerMenuModal from './components/HamburgerMenuModal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HamburgerMenuModal />
      </div>
    );
  }
}

export default App;
