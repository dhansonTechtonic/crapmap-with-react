import React, { Component } from 'react';

import store from '../../redux/store/'

import GoogleMap from './GoogleMap';
import Navigation from './Navigation';
import AddPinModal from '../addEditPin/AddPinModal'
import SortButtons from '../buttons/SortButtons'

import {connect} from 'react-redux';

import {getPins} from '../../redux/actions/pinActions'
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

  handleClick(e) {
    switch (e.target.value) {
      case "car":
        this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
        break;
      case "baseball-ball":
        this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
        break;
      case "tv":
        this.setState({ category: "Electronics" }, () => { console.log(this.state.category) });
        break;
      case "question-circle":
        this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
        break;
      default:
        this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
    }
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
        <AddPinModal />
        <SortButtons handleClick={this.handleClick}/>
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