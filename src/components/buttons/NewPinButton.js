import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconButton} from '@material-ui/core'
import AddPinModal from '../addEditPin/AddPinModal';
import '../App.css'

import PropTypes from 'prop-types'

export default class NewPinButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addPinIsOpen: false,
      showNewPinButton: true,
    };
    this.toggleAddPin = this.toggleAddPinModal.bind(this)
  }

  toggleAddPinModal = () => {
    this.setState({
      addPinIsOpen: !this.state.addPinIsOpen,
      showNewPinButton: !this.state.showNewPinButton
    });
  }
  
  render() {
    return (
      <div>
        <AddPinModal show={this.state.addPinIsOpen} 
          onClose={this.toggleAddPinModal} />
        <IconButton className="new-pin-button" 
          show={this.state.showNewPinButton} 
          onClick={this.toggleAddPin} 
          onClose={this.toggleAddPinModal}>
          <FontAwesomeIcon icon="plus-circle"/>
        </IconButton>
      </div>
    )
  }
}

NewPinButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};