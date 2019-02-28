import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TrashCanButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon="trash" className="trash-button"/>
      </div>
    )
  }
}


