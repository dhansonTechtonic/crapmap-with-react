import React, { Component } from 'react';
// import { FirebaseContext } from '../../firebase';
import { auth, getFirebaseUser } from './../../firebase.js'
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
import '../App.css'
import store from '../../redux/store'
import { registerUser } from '../../redux/actions/userActions'



const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const style = {
  "root": {
    color: "white",
    backgroundColor: "#2E2D31",
    width: 250,
    borderRadius: 4,
    opacity: 1,
    float: "left",
    boxShadow: "none", 
  },

  "root:hover": {
    color: "red"
  }
}
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

  doSendEmailVerification = () => {
    const user = getFirebaseUser();
    user.sendEmailVerification()
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => this.setState({ open: false });

  doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  onSubmit = () => {
    const { email, passwordOne } = this.state;

    this.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      console.log(authUser.user.emailVerified);
      this.doSendEmailVerification(email)

      var actionObject = {
        userID: authUser.user.uid,
        auth: true,
        emailVerified: authUser.user.emailVerified
      }

      store.dispatch(registerUser(actionObject));
      this.props.sendData(authUser);
      
      this.setState({ ...INITIAL_STATE });
    })
    .catch(error => this.setState({ error }));
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value })


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      open,
      scroll,
    } = this.state;

    const invalidEmail = () => /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '' ||
      email === invalidEmail();
    
    const { classes } = this.props;

    return (
      <div>
        <Fab  
          classes={{ root: classes.root }}
          id="signUp"
          onClick={ this.handleClickOpen('paper') }>
          <p>New? Click here to Sign Up</p> 
        </Fab>
        <Dialog
          open={ open }
          onClose={ this.handleClose }
          scroll={ scroll }
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}
        >
          <DialogTitle>SIGN UP</DialogTitle>
          <LineDivider />
          <DialogContent>
            <form onSubmit={ this.onSubmit }>
              <TextField
                id="outlined-name"
                label="Username"
                margin="normal"
                variant="outlined"
                value={ username }
                onChange={ this.onChange }
                placeholder="Username"
                name="username"
              />
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
              <TextField
                type="password"
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                value={ passwordOne }
                onChange={ this.onChange }
                placeholder="Enter Password"
                name="passwordOne"
              />
              <TextField
                type="password"
                id="outlined-name"
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                value={ passwordTwo }
                onChange={ this.onChange }
                placeholder="Confirm Password"
                name="passwordTwo"
              />
              { error && <p>{ error.message }</p> }
              <DialogActions >
                <Button onClick={ this.onSubmit } disabled={ isInvalid } type="submit" color="primary">Sign-Up</Button>
                <Button onClick={ this.handleClose } color="error">Cancel</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

// SignUpForm.propTypes = {
//   // onClose: PropTypes.func.isRequired,
//   classes: PropTypes.object.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node,
//   className: PropTypes.string,

// };

export default withStyles(style)(SignUpForm);