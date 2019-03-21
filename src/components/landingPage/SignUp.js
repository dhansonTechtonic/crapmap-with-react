import React, { Component } from 'react';
// import { FirebaseContext } from '../../firebase';
import {auth} from './../../firebase.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import LineDivider from '../addEditPin/LineDivider.js';

import store from '../../redux/store'
import { registerUser } from '../../redux/actions/userActions'
import { pink } from '@material-ui/core/colors';



const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE, 
      open: false,
      scroll: 'paper',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });

  };

  doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);

  onSubmit = () => {
    const { email, passwordOne } = this.state;
      this.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        var actionObject = {
          userID: authUser.user.uid,
          auth: true
        }
        store.dispatch(registerUser(actionObject));
        this.props.sendData(authUser);

        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    
 

    return (
      <div>
        <Fab 
          // color="primary" 
          style={{ 
            width: 250, 
            borderRadius: 4,
            // margin: 10, 
            opacity: 1,
            color: "white",
            backgroundColor: "inherit",
            float: "left", 
          }} 
          onClick={this.handleClickOpen('paper')}>
          New? Click here to Sign Up 
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>
          <DialogTitle>
            SIGN UP 
          </DialogTitle>
          <LineDivider />
          <DialogContent>
            <form onSubmit={this.onSubmit}>
              <TextField
                id="outlined-name"
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={this.onChange}
                placeholder="Username"
                name="username"
              />
              <TextField
                id="outlined-name"
                label="Email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={this.onChange}
                placeholder="Email Address"
                name="email"
              />
              <TextField
                type="password"
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                value={passwordOne}
                onChange={this.onChange}
                placeholder="Enter Password"
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
                placeholder="Confirm Password"
                name="passwordTwo"
              />
              {error && <p>{error.message}</p>}
              <DialogActions >
                <Button onClick={this.onSubmit} disabled={isInvalid} type="submit" color="primary">Sign-Up</Button>
                <Button onClick={this.handleClose} color="error">Cancel</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default SignUpForm;