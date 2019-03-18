import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconButton} from '@material-ui/core'
import '../App.css'

export default class NewPinButton extends Component {
  render() {
    return (
      <div>
        <IconButton className="new-pin-button">
          <FontAwesomeIcon icon="plus-circle"/>
        </IconButton>
      </div>
    )
  }
}
