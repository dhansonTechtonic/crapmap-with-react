import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import '../App.css'

export default class BoxButtons extends Component {
  render() {
    return (
      <div className="boxes">
        <IconButton className="small">
          <FontAwesomeIcon icon="box" />
        </IconButton>

        <IconButton className="medium">
          <FontAwesomeIcon icon="box" />
        </IconButton>

        <IconButton className="big">
          <FontAwesomeIcon icon="box" />
        </IconButton>
      </div>
    )
  }
}
