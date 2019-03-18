import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
  }

  componentDidUpdate(prevProps){ //on update...
    let response = store.getState().pins
    response.then(pins => pins)
    console.log(response)
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

