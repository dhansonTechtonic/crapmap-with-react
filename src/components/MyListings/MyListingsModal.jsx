import React, { Component } from 'react'
import '../App.css'
import MyListingsPost from './MyListingsPost'
import ExitButton from '../buttons/ExitButton'

export default class MyListingsModal extends Component {
  render() {
    return (
        <div className='vertical-modal'>  
            <div className="header">
                <h2>My Listings</h2>
                <ExitButton />
            </div>
            <hr/>
            <div className="items-listing-container">
              <MyListingsPost />
            </div>
        </div>
    )
  }
}
