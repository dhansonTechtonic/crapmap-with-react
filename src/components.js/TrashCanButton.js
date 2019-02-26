import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TrashCanButton extends Component {
  render() {
    return (
      <div>
        <button className='trash-can'><FontAwesomeIcon icon="faTrash" /></button>
      </div>
    )
  }
}
