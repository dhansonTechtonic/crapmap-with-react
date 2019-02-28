import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ImageButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="image-button" icon="camera" />
      </div>
    )
  }
}
