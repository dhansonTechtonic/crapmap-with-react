import React, { Component } from 'react';
import { auth } from './../../firebase.js'
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import LineDivider from '../addEditPin/LineDivider.js';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  open: false,
  scroll: 'paper',
};

const style = {
  "root": {
    color: "white",
    backgroundColor: "#2E2D31"
  },
}

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value });
  
  onSubmit = event => {
    const { passwordOne } = this.state;
    
    this.doPasswordUpdate(passwordOne)
    .then(() => this.setState({ ...INITIAL_STATE }))
    .catch(error => this.setState({ error }));
    
    event.preventDefault();
  };
  
  doPasswordUpdate = password => auth.currentUser.updatePassword(password);

  handleClickOpen = scroll => () => this.setState({ open: true, scroll });

  handleClose = () => this.setState({ open: false });

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    const { classes } = this.props;

    return (
      <div>
        <Fab 
          style={{
            width: 150,
            borderRadius: 4,
            margin: 10,
            opacity: 1,
            height: 1,
          }}
          classes={{ root: classes.root }}
          id="editPassword"
          onClick={ this.handleClickOpen('paper') }
          >Edit Password
        </Fab>
        <Dialog
          open={ this.state.open }
          onClose={ this.handleClose }
          scroll={ this.state.scroll }
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle>CHANGE YOUR PASSWORD</DialogTitle>
          <LineDivider />
          <DialogContent>
            <form onSubmit={this.onSubmit}>
              <TextField
                type="password"
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                value={passwordOne}
                onChange={this.onChange}
                placeholder="Enter New Password"
                name="passwordOne"
              />
              <TextField
                type="password"
                id="outlined-name"
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                value={passwordTwo}
                onChange={this.onChange}
                placeholder="Confirm New Password"
                name="passwordTwo"
              />
              {error && <p>{error.message}</p>}
              <DialogActions>
                <Button
                  onClick={this.onSubmit}
                  onSubmit={this.handleClose}
                  disabled={isInvalid}
                  type="submit"
                  color="primary"
                >CONFIRM PASSWORD CHANGE
                </Button>
                <Button
                  onClick={this.handleClose}
                  color="error"
                >Cancel
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

ChangePasswordForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(style)(ChangePasswordForm)