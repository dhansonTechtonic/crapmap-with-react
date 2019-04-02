import React, { Component } from 'react';
import { auth } from './../../firebase.js'

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
  email: '',
  error: null,
  open: false,
  scroll: 'paper',
};

export default class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  doPasswordReset = email => auth.sendPasswordResetEmail(email);

  onSubmit = event => {
    const { email } = this.state;

    this.doPasswordReset(email)
    .then(() => this.setState({ ...INITIAL_STATE }))
    .catch(error => this.setState({ error }));

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
    <div>
      <Fab 
        style={{
          width: 100,
          borderRadius: 4,
          margin: 10,
          opacity: 1,
          height: 1
        }}
        onClick={ this.handleClickOpen('paper') }
      >Forgot Password?
      </Fab>
      <Dialog
        open={ this.state.open }
        onClose={ this.handleClose }
        scroll={ this.state.scroll }
        aria-labelledby="scroll-dialog-title"
        style={{ 
          'z-index': 30, 
          'background-color': 'primary' 
        }}
      >
        <DialogTitle>RESET PASSWORD</DialogTitle>
        <LineDivider />
        <DialogContent>
          <form onSubmit={ this.onSubmit }>
            <TextField
              id="outlined-name"
              label="Email"
              margin="normal"
              variant="outlined"
              value={ email }
              onChange={ this.onChange }
              placeholder="Email Address"
              name="email"
            />
            { error && <p>{ error.message }</p> }
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ this.onSubmit } 
            disabled={ isInvalid } 
            type="submit" 
            color="primary"
          >Send Reset Email
          </Button>
          <Button 
            onClick={ this.handleClose } 
            color="error"
          >Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
  }
}

PasswordForgetForm.propTypes = {
  doPasswordReset: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};