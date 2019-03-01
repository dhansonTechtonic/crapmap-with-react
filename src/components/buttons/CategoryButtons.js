import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

export default class CategoryButtons extends Component {
  render() {
    return (
        <div className="pin-page-card">
            <div className="categories">
                <FontAwesomeIcon className="couch-button" icon="couch"/>
                <FontAwesomeIcon className="car-button" icon="car"/>
                <FontAwesomeIcon className="sports-button" icon="baseball-ball"/>
                <FontAwesomeIcon className="tv-button" icon="tv"/>
                <FontAwesomeIcon className="random-button" icon="question-circle"/>
            </div>
        </div>
    )
  }
}
