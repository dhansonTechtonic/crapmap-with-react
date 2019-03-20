import React, { Component } from 'react';
import firebase, {auth} from './../../firebase.js';
import Fab from '@material-ui/core/Fab'

// import './Google.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedIn: null,
      displayName: '',
      email: '',
      uid: 0
    }
    this.provider = new firebase.auth.GoogleAuthProvider() || new firebase.auth.FacebookAuthProvider();
    this.login = this.login.bind(this); 
   
  }

  

  login() {
    auth.signInWithPopup(this.props.provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          userSignedIn: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        });
        this.props.sendData(user);
      }
    );
  }
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          userSignedIn: !!user,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid 
        });
      } 
    });

  }

  render() {
    return(
      <div>
        <div>
          <Fab color="error" style={{width:210, borderRadius:4, margin: 10, opacity: 1}}onClick={this.login}>Login with {this.props.providerName} </Fab>              
        </div>
       
      </div>
    )
  }
}