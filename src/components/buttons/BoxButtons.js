import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

export default class BoxButtons extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="box small" icon="box" />
        <FontAwesomeIcon className="box medium" icon="box" />
        <FontAwesomeIcon className="box big" icon="box" />
      </div>
    )
  }
}
