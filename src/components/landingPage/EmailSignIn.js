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

import store from '../../redux/store'
import { loginUser } from '../../redux/actions/userActions'
import SignUpForm from './SignUp'


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
      open: false,
      scroll: 'paper',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleClickOpen = scroll => () => this.setState({ open: true, scroll });


  handleClose = () => this.setState({ open: false })

  doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

  onSubmit = (e) => {
    const { email, password } = this.state;

    this.doSignInWithEmailAndPassword(email, password)
    .then(authUser => {
      
      var actionObject = {
        userID: authUser.user.uid,
        auth: true
      }

      store.dispatch(loginUser(actionObject));
      this.props.sendData(authUser);

      this.setState({ ...INITIAL_STATE });
    })
    .catch(error => this.setState({ error }));
    e.preventDefault();
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value });


  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div>
        <Fab color="error"
          style={{
            width: 210,
            borderRadius: 4,
            margin: 10,
            opacity: 1
          }}
          onClick={this.handleClickOpen('paper')}
          >Login with Email
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>
          <DialogTitle>SIGN IN</DialogTitle>
          <LineDivider />
          <DialogContent>
            <form onSubmit={this.onSubmit}>
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
                value={password}
                onChange={this.onChange}
                placeholder="Enter Password"
                name="password"
              />
              {error && <p>{error.message}</p>}
              <DialogActions >
                <SignUpForm/>
                <Button onClick={this.onSubmit} disabled={isInvalid} type="submit" color="primary">Sign In</Button>
                <Button onClick={this.handleClose} color="error">Cancel</Button>
              </DialogActions>
            </form>
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}

EmailForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default EmailForm;