import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import { isAbsolute } from 'path';
// const mapStyles = require('./GoogleMapStyles.json')


const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {

  render() {
    return (
        <div className='map-container'>
      <Map
      
        google={this.props.google}
        zoom={15}
        style={mapStylesDefaults}
        centerAroundCurrentLocation={true}
        draggable={true} 
        
      />
    
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:process.env.REACT_APP_CRAP_MAP_API_KEY
})(MapContainer);

  