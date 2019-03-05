import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconButton from '@material-ui/core/IconButton';
import '../App.css'

export default class CategoryButtons extends Component {
  constructor(props){
    super(props);
    this.state={category: 'furniture'}
  }

  render() {
    return (
        <div className="pin-page-card">
            <div className="categories">
              <IconButton className="couch-button" onClick={this.props.handleClick} value="couch">
                <FontAwesomeIcon icon="couch"/>
              </IconButton>

              <IconButton className="car-button" value="car" onClick={this.props.handleClick} >
                <FontAwesomeIcon icon="car"/>
              </IconButton>

              <IconButton className="sports-button" value="baseball-ball" onClick={this.props.handleClick} >
                <FontAwesomeIcon icon="baseball-ball" />
              </IconButton>

              <IconButton className="tv-button" value="tv" onClick={this.props.handleClick} >
                <FontAwesomeIcon icon="tv" />
              </IconButton>


              <IconButton className="random-button" value="question-circle" onClick={this.props.handleClick} >
                <FontAwesomeIcon icon="question-circle" />
              </IconButton> 
            </div>
        </div>
    )
  }
}
