import React, { Component } from 'react'
import Arrow from '../assets/crapmap-locator.png'
import '../App.css'

export default class LocationArrow extends Component {
  render() {
    return (
      <div>
        <img class="marker-style" src={Arrow}></img>
      </div>
    )
  }
}
