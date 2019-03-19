import React, { Component } from 'react';

import store from '../../redux/store/'

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import NewPinButton from '../buttons/NewPinButton'

import {connect} from 'react-redux';

import {getPins} from '../../redux/actions/pinActions'
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pins: []
    };
  }

  componentDidMount(){

    // var testObject = {
    //     "category": "couch",
    //     "img": "image",
    //     "description": "ok testing now",
    //     "lat": "test",
    //     "lng": "testing",
    //     "zip": "lol",
    //     "size": "2",
    //     "tags": ['joket', 'slendermane'],
    //     "title": "title of testing pin",
    //     "userID": "139508829c3"
    // }

    store.dispatch(getPins());
  }

  componentDidUpdate(prevProps){
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  render() {
    // console.log(this.state.pins)
    return (
      <div className="App">
        <NewPinButton />
        <Navigation />
        <GoogleMap  />
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(HomePage);