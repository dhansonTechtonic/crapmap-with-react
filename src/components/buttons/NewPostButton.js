import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import { IconButton } from '@material-ui/core';
import AddPinModal from '../addEditPin/AddPinModal';


import PropTypes from 'prop-types'

export default class NewPostButton extends Component {
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
        <AddPinModal show={this.state.addPinIsOpen} onClose={this.toggleAddPinModal} />
        <IconButton show={this.state.showNewPinButton}><FontAwesomeIcon  onClick={this.toggleAddPin} className="new-pin-button"icon="plus-circle"/> </IconButton>
      </div>
    )
  }
}

NewPostButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
