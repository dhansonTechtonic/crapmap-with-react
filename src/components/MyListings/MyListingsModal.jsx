import React, { Component } from 'react'
import '../App.css'
import ExitButton from '../buttons/ExitButton'

import PropTypes from 'prop-types'

import MyListingsPost from './MyListingsPost'

export default class MyListingsModal extends Component {

  async _getListings(){
    return await fetch(`https://us-central1-crapmap-c5c7f.cloudfunctions.net/apiListings/myListings`, {

    }).then((res) =>{
      return res.json();
    }).then((data) =>{
      console.log(data);
      console.log('test');
    })
  }

  componentDidMount(){
    this._getListings();
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
        <div className='vertical-modal'>  
            <div className="header">
                <h2 >My Listings</h2>
            <ExitButton onClick={this.props.onClose}/>
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
