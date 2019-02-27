import React, { Component } from 'react';
import './App.css';
import ViewPinModal from './components/ViewPinModal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'

library.add(faBox)
library.add(faCouch)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewPinModal />
      </div>
    );
  }
}

export default App;
