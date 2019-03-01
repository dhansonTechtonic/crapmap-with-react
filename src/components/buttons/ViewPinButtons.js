import React, { Component } from 'react'
import '../App.css'
export default class ViewPinButtons extends Component {
  render() {
    return (
      <div>
        <button className="view-pin-button" type="submit">DIBS</button>
        <button className="view-pin-button" type="submit">PASS</button>
      </div>
    )
  }
}
