import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PinImage from '../assets/oldcouch.jpg'
import '../App.css'
import ViewPinButtons from '../buttons/ViewPinButtons'
import PropTypes from 'prop-types'

export default class ViewPinModal extends Component {
  render() {
    if (!this.props.show) {
        return null;
    }
    return (
        <div className="view-pin-container">
            <div className="view-pin-row">
                <card className="view-pin-main drop-shadow">
                    <div className="fakeimg">
                        <img className="view-pin-img" src={PinImage}></img>
                    </div>
                    <div className="view-pin-information-bar">
                        <div className="view-pin-row-info">
                            <label className="view-pin-label" for="post-title">crusty couch</label>
                            <FontAwesomeIcon className='box-icon' icon='box'/>
                            <FontAwesomeIcon className='box-icon' icon='couch' />
                        </div>

                        <div className="row row-container view-pin-button-container">
                            <div className="dibs-pass-container">
                                <ViewPinButtons />
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    )
  }
}

ViewPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};