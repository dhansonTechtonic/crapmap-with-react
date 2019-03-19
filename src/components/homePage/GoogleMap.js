import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { isAbsolute } from 'path';
import store from '../../redux/store'
import ViewPinModal from './ViewPinModal';

const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};

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
    // this.setState({viewPinsArray: pinsArray})
     this.handlePins(pinsArray);
    // return pinsArray
    }
    )
  }

  handlePins(pinsArray){
    let viewPinsArray = [];
    for (let i =0; i<=pinsArray.length; i++) {
     let locationObj ={
        lat: pinsArray[i]._fieldsProto.location.mapValue.fields.lat.doubleValue, 
        lng: pinsArray[i]._fieldsProto.location.mapValue.fields.lng.doubleValue
      }
    viewPinsArray.push(locationObj)
    }
    console.log(viewPinsArray)
    this.fireUpdatePinsLocation(viewPinsArray);

    console.log(viewPinsArray, "array")
    console.log(viewPinsArray.length)
  }

  fireUpdatePinsLocation(data){
    console.log("this is data", data)
    return <Marker 
    location={data}
    onClick={this.toggleViewPinModal}
    />

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
{

}

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



