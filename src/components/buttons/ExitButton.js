import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

export default class ExitButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="exit-button" icon="times" />
      </div>
    )
  }
}
