import React, { Component } from 'react';
import './App.css';

import EditPinModal from './components/EditPinModal'
import AddPinModal from './components/AddPinModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EditPinModal />
        <AddPinModal />
      </div>
    );
  }
}

export default App;
