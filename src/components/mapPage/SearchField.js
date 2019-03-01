import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

export default class SearchField extends Component {
  render(props) {
    return (
    <div className="search-bar">
        <span><FontAwesomeIcon className="search-icon" icon="search" /></span>
        <input type="text" placeholder="Search..."></input>
      </div>
    )
  }
}
