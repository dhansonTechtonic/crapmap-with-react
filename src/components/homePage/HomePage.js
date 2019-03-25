import React, { Component } from 'react';

import store from '../../redux/store/'

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import AddPinModal from '../addEditPin/AddPinModal'
import SortButtons from '../buttons/SortButtons'

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {getPins, clearPins, getByCategory} from '../../redux/actions/pinActions'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pins: [],
      category: 'All'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    switch (data) {
      case "Auto Parts":
        this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
        break;
      case "Sporting":
        this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
        break;
      case "Electronics":
        this.setState({ category: "Electronics" }, () => { console.log(this.state.category) });
        break;
      case "Misc":
        this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
        break;
      case "Furniture":
        this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
        break;
      default:
        this.setState({ category: "All" }, () => { console.log(this.state.category) });
    }


    if (data == "All") {
      store.dispatch(clearPins());
      store.dispatch(getPins());
    } else {
      store.dispatch(clearPins());
      store.dispatch(getByCategory(data));
    }
    
  }

  componentDidMount(){
    store.dispatch(getPins());
  }

  componentDidUpdate(prevProps){
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }

    // console.log(store.getState());
  }

  render() {

  // USER AUTH LOGIC  
  if (localStorage.getItem('userID')){
    return (
      <div className="App">
        <AddPinModal />
        <SortButtons categoryChange={this.handleClick}/>
        <Navigation />
        <GoogleMap  />
      </div>
    );

  } else if (store.getState().user.auth) {

      var storeObject = store.getState().user;

      localStorage.setItem('userID', JSON.stringify(storeObject.userID));

      return (
        <div className="App">
          <AddPinModal />
          <SortButtons categoryChange={this.handleClick}/>
          <Navigation />
          <GoogleMap  />
        </div>
    ) 
  } else {
    return <Redirect to='/'/>
  }
  }
}

function mapStateToProps(reduxState){
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(HomePage);