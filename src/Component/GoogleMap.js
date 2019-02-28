import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { isAbsolute } from 'path';


const mapStyles = {
  position: isAbsolute,  
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {
  render() {
    return (
        <div className='map-container'>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 105.2705,
         lng: 40.0150
        }}        
      />
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer);

