import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import IconButton from '@material-ui/core/IconButton';

export default class ImageButton extends Component {
  render() {
    return (
      <div>
        <IconButton className="image-button" >
          <FontAwesomeIcon icon="camera" />
        </IconButton>
      </div>
    )
  }
}
