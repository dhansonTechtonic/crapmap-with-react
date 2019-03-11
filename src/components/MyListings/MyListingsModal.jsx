import React, { Component } from 'react'
import '../App.css'
import ExitButton from '../buttons/ExitButton'

import PropTypes from 'prop-types'

import MyListingsPost from './MyListingsPost'
import { IconButton } from '@material-ui/core';

export default class MyListingsModal extends Component {
  render() {

    if (!this.props.show) {
      return null;
    }

    return (
        <div className='vertical-modal'>  
            <div className="header">
                <h2 >My Listings</h2>
            <IconButton onClick={this.props.onClose}>
              <ExitButton />
            </IconButton>
            </div>
            <hr/>
            <div className="items-listing-container">
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
