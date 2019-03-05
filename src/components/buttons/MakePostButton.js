import React, { Component } from 'react'
import '../App.css'

export default class MakePostButton extends Component {
  render() {
    return (
      <div>
        <button className="make-post-button" type="button" placeholder="button">POST</button> 
      </div>
    )
  }
}
