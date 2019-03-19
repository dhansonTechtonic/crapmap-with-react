import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyCrapPost from './MyCrapPost'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import LineDivider from '../addEditPin/LineDivider'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'

class MyCrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: 'paper',
    }
  }

  async _getListings(){
    return await fetch(`https://us-central1-crapmap-c5c7f.cloudfunctions.net/apiListings/myListings`, {

    }).then((res) =>{
      return res.json();
    }).then((data) =>{
      console.log(data);
      console.log('test');
    })
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
              <MyCrapPost />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="error">CLOSE</Button>
            </DialogActions>
          </Dialog>
        </div>
    )
  }
}

MyCrapModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}

export default MyCrapModal
