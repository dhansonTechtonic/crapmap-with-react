import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PencilButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="edit-pencil" icon="pencil-alt" />
      </div>
    )
  }
}
