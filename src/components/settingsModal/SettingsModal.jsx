import React, { Component } from 'react'
import '../App.css'
import SliderComponent from '../SliderComponent'
import DeleteAccountButton from '../buttons/DeleteAccountButton'
import ExitButton from '../buttons/ExitButton'

import PropTypes from "prop-types"


export default class SettingsModal extends Component {
    render() {

    if (!this.props.show) {
        return null;
    }

    return (
        <div className="vertical-modal">
            <div className="body-flex">
                <div className="header">
                    <h2> Settings </h2>
                    <ExitButton onClick={this.props.onClose}/>
                </div>
                <hr />
                <div className="settings-container">
                <label>Search Radius: </label>
                <SliderComponent />
                <hr />
                <label>Notifications:</label>
                <input type="checkbox"></input>
                </div>
                <footer>
                    <DeleteAccountButton />
                </footer>
            </div>
        </div>
    )
  }
}

SettingsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};
