import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import '../App.css'

export default class ExitButton extends Component {
  render() {
    return (
      <div>
        <IconButton className="exit-button">
         <FontAwesomeIcon icon="times" />
        </IconButton>
      </div>
    )
  }
}
