import React, { Component } from 'react'

export default class MyListingsPost extends Component {
  render() {
    return (
      <div>
        <div class="item-list-details">
          <ul class="item-list-grouping">
            <li class="item-picture"> <img src="placeHolder100.jpg" alt="placeholderimage"></img></li>
            <li class="item-title-location-container">
                <span class="title-span">My ipsum crap.</span>
            <hr/> 
              <span class="location-span">Lorem ipsum dolor sit amet.</span>
            </li>
            <li class="item-edit-button"><i class="fas fa-pencil-alt"></i></li>
          </ul>
        </div>
      </div>
    )
  }
}


// need gradient divider 