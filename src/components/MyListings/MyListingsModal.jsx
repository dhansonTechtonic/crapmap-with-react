import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MyListingsPost from './MyListingsPost'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import LineDivider from '../addEditPin/LineDivider'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconButton } from '@material-ui/core';
// import store from '../../redux/store';
// import ListItemText from '@material-ui/core/ListItemText'
// import {deletePin} from '../../redux/actions/pinActions'

class MyListingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: 'paper',
      user: {},
      pins: []
    }
  }
    
  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }


  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // componentDidMount(){
  //   this._getListings();
  // }

  render() {
    return (
      <div>
        <li onClick={this.handleClickOpen('paper')} className="nav-links">
            MY CRAP
          </li>
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
              <MyListingsPost />
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
        
function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(MyListingsModal);

