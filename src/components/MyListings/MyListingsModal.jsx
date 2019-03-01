import React, { Component } from 'react'

import PropTypes from 'prop-types'

import MyListingsPost from './MyListingsPost'

export default class MyListingsModal extends Component {
  render() {

    if (!this.props.show) {
      return null;
    }

    return (
        <div className='vertical-modal'>  
            <div className="page-header-title">
                <h1 className="header">
                    MY LISTINGS
                </h1>

                {/* <button onClick={this.props.onClose}>close</button> */}
            </div>
            <hr/>
            <div className="items-listing-container">
              <MyListingsPost />
              <MyListingsPost />
              <MyListingsPost />
            </div>
        </div>
    )
  }
}

MyListingsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}
