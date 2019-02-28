import React, { Component } from 'react'

import PropTypes from "prop-types"

import './SettingsModal.css'

export default class SettingsModal extends Component {
    render() {

    if (!this.props.show) {
        return null;
    }

    return (
            <div className="vertical-modal">
                <div className="body-flex">
                    <div className="title-exit-button-container">
                        <div className="title-exit-button-flex-group">
                            <h1> Settings </h1>
                            <button onClick={this.props.onClose}>Close</button>
                        </div>
                    </div>
                    <div className="settings-container">
                            <hr/>

                            <hr/>
                    </div>
                    <footer className="footer-flex">

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
