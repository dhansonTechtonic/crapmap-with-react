import React, { Component } from 'react'
import '../App.css'
import image from '../assets/oldcouch.jpg'
import PencilButton from '../buttons/PencilButton'

export default class MyListingsPost extends Component {
  render() {
    return (
      <div>
        <div className="item-list-details">
          <ul className="item-list-grouping">
            <li><img alt='pin' className="item-picture" src={image}></img></li>
            <li className="item-title-location-container">
                <span className="title-span">My ipsum crap.</span>
            <hr/> 
              <span className="location-span">Lorem ipsum dolor sit amet.</span>
            </li>
            <PencilButton />
            <li></li>
            </ul>
        </div>
      </div>
    )
  }
}


// need gradient divider 