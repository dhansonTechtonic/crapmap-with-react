import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MyListingsPost from './MyListingsPost'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import LineDivider from '../addEditPin/LineDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import {connect} from 'react-redux';
import store from '../../redux/store';

import { IconButton, Tooltip } from '@material-ui/core';

import {deletePin} from '../../redux/actions/pinActions'

async function getPinsByUser(userID) {
  // console.log('inside Get Pins By USer');
  // console.log(userID);
  var userPins = await fetch(' https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/get/' + String(userID), {
    method: 'GET',
  })
    .then((res) => { return res.json()})
    .then((val) => { 
      console.log(val);
      return val})
    .catch((err) => err)

    return userPins;
}



class MyListingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: 'paper',
      userPins: []
    }
  }

   

  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  
  }

   handleClickOpen = scroll => async () => {
    this.setState({ open: true, scroll });

     let userID = JSON.parse(localStorage.getItem('userID'))
     this.setState({ userPins: await getPinsByUser(userID) })

    console.log(this.state);    
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Tooltip title="View My Crap">
          <li onClick={this.handleClickOpen('paper')} className="nav-links">
            MY CRAP
          </li>
        </Tooltip>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>
            <DialogTitle>
              MY CRAP
            </DialogTitle>
            <LineDivider />
            <DialogContent>
              <MyListingsPost {...this.state}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="error">CLOSE</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
  }
}
        
MyListingsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}
        
// function mapStateToProps(reduxState) {
//   return {
//     user: reduxState.user,
//     pins: reduxState.pins
//   }
// }

// export default connect(mapStateToProps)(MyListingsModal);
export default MyListingsModal

