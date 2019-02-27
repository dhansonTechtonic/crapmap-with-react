import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PinImage from './oldcouch.jpg'

export default class ViewPinModal extends Component {
  render() {
    return (
        <div className="view-pin-container">
            <div>
                <img className="view-pin-image" src={PinImage}></img>
            </div>
            <div>
                <span>
                    <label className="view-pin-label" for="post-title">crusty couch</label>
                    <FontAwesomeIcon className='box-icon' icon='box' />
                    <FontAwesomeIcon className='box-icon' icon='couch' />
                </span>
                <span>
                    <button className="dibs-button" type="submit">DIBS</button>
                    <button className="pass-button" type="submit">PASS</button>
                </span>
            </div>
            {/* <div className="view-pin-row">
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
                                <button className="dibs-button" type="submit">DIBS</button>
                                <button className="pass-button" type="submit">PASS</button>
                            </div>
                        </div>
                    </div>
                </card>
            </div> */}
        </div>
    )
  }
}
