import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NewPostButton extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon className="new-pin-button"icon="plus-circle"/>
      </div>
    )
  }
}
