import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import store from '../../redux/store';

import {getPins} from '../../redux/actions/pinActions';
// import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
// import { isAbsolute } from 'path';
// import MarkerWrapper from './MarkerWrapper';
// const mapStyles = require('./GoogleMapStyles.json')


// import ViewPinModal from './ViewPinModal'



// const functions = require('firebase-functions');

// DEFAULT MAP STYLES

import { isAbsolute } from 'path';
import store from '../../redux/store'
import {getPins} from '../../redux/actions/pinActions'

import PropTypes from 'prop-types'
import ViewPinModal from './ViewPinModal';

const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};

const pinsArray = [
  {
    lat: 40.021226,
    lng: -105.218359
  },
  {
    lat: 40.221226,
    lng: -105.228359
  },
  {
    lat: 40.121226,
    lng: -105.228359
  }
]



export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewPinModalIsOpen: false,
    };
    this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
  }

//update with mapstate to props 

  toggleViewPinModal = () => {
    this.setState({
      viewPinModalIsOpen: !this.state.viewPinModalIsOpen,
    });
  }

  init () {
    console.log("this is load")
    // console.log(store.getState())
  }

   onLoad () {
    //load static map based on user location
      //get api key and load map. 
    //load map markers from db w/info
  }

  firePlacePin (pinResponse) {
    // console.log("inside firePlacePin", pinResponse)
    const locationObj = {

      lat : pinResponse[2]._fieldsProto.location.mapValue.fields.lat.doubleValue,
      // locationObj.lat = 40.021226
      lng : pinResponse[2]._fieldsProto.location.mapValue.fields.lng.doubleValue
      // locationObj.lng = -105.218359
    };
    console.log(locationObj)
    return locationObj;
  }

loopOverArray() {
  const pinsArray = [
    {
      lat: 40.021226,
      lng: -105.218359
    },
    {
      lat: 40.221226,
      lng: -105.228359
    },
    {
      lat: 40.121226,
      lng: -105.228359
    }
  ]
  const locationObj = {};

  for(let i = 0; i<pinsArray.length; i++) {
      locationObj.lat = pinsArray[i].lat
      locationObj.lng = pinsArray[i].lng
    };

  }

render() {
  return (
        <div className='map-container'>

<Map google={this.props.google}
    style={mapStylesDefaults}
    className={'map'}
    zoom={7}  
    centerAroundCurrentLocation={true}
    draggable={true} 
    >



 {/* <Marker onClick={this.toggleViewPinModal}
      position={this.props.markerLocation}  
     
     />  */}

 {/* <Marker onClick={this.toggleViewPinModal}
    position={} /> */}

</Map>

<div className="view-pin-container">
<ViewPinModal  show={this.state.viewPinModalIsOpen} onClose={this.state.viewPinModalIsOpen} onClick={this.toggleViewPinModal}/>
</div>

</div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGqxNDh10YIbriH1cJpPt9cn8TJdCwbFM'
})(MapContainer);

// Map.propTypes = {
//   google: React.PropTypes.object,
//   zoom: React.PropTypes.number,
//   initialCenter: React.PropTypes.object
// }

// Map.defaultProps = {
//   zoom: 13,
//   centerAroundCurrentLocation: true
// }
