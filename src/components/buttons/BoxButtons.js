import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

export default class BoxButtons extends Component {
  render() {
    return (
      <div className="boxes">
        <FontAwesomeIcon className="small" icon="box" />
        <FontAwesomeIcon className="medium" icon="box" />
        <FontAwesomeIcon className="big" icon="box" />
      </div>
    )
  }
}
