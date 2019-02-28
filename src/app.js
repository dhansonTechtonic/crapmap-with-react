import React, { Component } from 'react'

// components import
import LandingPage from './components/landingPage/LandingPage'
import AddPinModal from './components/addEditPin/AddPinModal'
import EditPinModal from './components/addEditPin/EditPinModal'

export default class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <AddPinModal />
        <EditPinModal />
      </div>
    )
  }
}
