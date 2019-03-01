import React, { Component } from 'react'
import './App.css'

export default class MyListingsModal extends Component {
  render() {
    return (
        <div className='vertical-modal'>  
            <div className="page-header-title">
                <h1 className="header">
                    MY LISTINGS
                </h1>
            </div>
            <hr/>
            <div className="items-listing-container">
            </div>
        </div>
    )
  }
}
