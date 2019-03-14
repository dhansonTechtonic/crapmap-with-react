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

// const mapStylesDefaults = {
//   position: isAbsolute,  
//   width: '100%',
//   height: '100%',
// };

export class MapContainer extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     viewPinIsOpen: false,
  //   };
  // }


  // toggleViewPin= () => {
  //   this.setState({
  //     viewPinIsOpen: !this.state.viewPinIsOpen,
  //   });
  // }


  init () {
    //document on loadavg. reset container
    //if logout, then reset the map 
    //bind events 
  }

   onLoad () {
    //load static map based on user location
      //get api key and load map. 
    //load map markers from db w/info
  }

// getCurrentMarkers () {
  
  
//   }


    onMarkerClick(props, marker, e) {
        console.log('this was clicked')
        // this.toggleViewPin();
      }

componentDidMount(){
  console.log(store.dispatch(getPins()));

  
}

render() {
  return (
        <div className='map-container'>
      {/* <Map
      
        google={this.props.google}
        zoom={15}
        style={mapStylesDefaults}
        centerAroundCurrentLocation={true}
        draggable={true} 
        /> */}


<Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>

  

  <Marker onClick={this.onMarkerClick.bind(this)}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
 
  <Marker onClick={this.onMarkerClick.bind(this)}
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />

</Map>

{/* <ViewPinModal show={this.state.settingsIsOpen} onClose={this.toggleViewPin}></ViewPinModal> */}



        
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:process.env.REACT_APP_CRAP_MAP_API_KEY
})(MapContainer);

// Map.propTypes = {
//   google: React.PropTypes.object,
//   zoom: React.PropTypes.number,
//   initialCenter: React.PropTypes.object
// }

// Map.defaultProps = {
//   zoom: 13,
//   // San Francisco, by default
//   initialCenter: {
//     lat: 37.774929,
//     lng: -122.419416
//   },
//   centerAroundCurrentLocation: true
// }