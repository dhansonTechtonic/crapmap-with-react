import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { isAbsolute } from 'path';
import store from '../../redux/store'
import ViewPinModal from './ViewPinModal';

const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};



// const pinsArray = [
//   {
//     lat: 40.021226,
//     lng: -105.218359
//   },
//   {
//     lat: 40.221226,
//     lng: -105.228359
//   },
//   {
//     lat: 40.121226,
//     lng: -105.228359
//   }
// ]

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewPinModalIsOpen: false,
    };
    this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
  }

  toggleViewPinModal = () => {
    this.setState({
      viewPinModalIsOpen: !this.state.viewPinModalIsOpen,
    });
  }

  componentDidUpdate(prevProps){ //on update...
    let response = store.getState().pins
    response.then(
      (response) => {
     let pinsArray = response.pins
    let viewPinsArray = [];
    for (let i =0; i<=pinsArray.length;i++) {
    
    let locationObj ={
      lat: pinsArray[i]._fieldsProto.location.mapValue.fields.lat.doubleValue, 
      lng: pinsArray[i]._fieldsProto.location.mapValue.fields.lng.doubleValue
    }
    // console.log(locationObj);
    viewPinsArray.push(locationObj)
    // this.fireUpdatePinsLocation(viewPinsArray);
  }
  console.log(viewPinsArray, "array")
  console.log(viewPinsArray.length)

  return viewPinsArray

    }
    )
  }

  // fireUpdatePinsLocation(data){
  //   let ltlng = maps.LatLng(data)
  //   console.log(ltlng)
  // }


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



