import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { isAbsolute } from 'path';
import store from '../../redux/store'
import {connect} from 'react-redux';

import ViewPinModal from './ViewPinModal';
// import { func } from 'prop-types';

const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};
export class MapContainer extends Component {

  constructor(props) {
    super();
    this.state = {
      viewPinModalIsOpen: false,
      user: {},
      pins: []
      }
      this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
    };
  

  toggleViewPinModal = () => {
    this.setState({
      viewPinModalIsOpen: !this.state.viewPinModalIsOpen,
    });
  }

  componentDidUpdate(prevProps) { 
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  onClick(e){
    console.log("this is ")
    console.log(e.target.name)
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

{this.state.pins.map((pin) => {
  // console.log(pin._fieldsProto.description.stringValue)
 return (
   
 <Marker
    key={pin._fieldsProto.userID.stringValue}
    name={ pin._fieldsProto.description}
    position={{ lat:pin._fieldsProto.location.mapValue.fields.lat.doubleValue,
                lng:pin._fieldsProto.location.mapValue.fields.lng.doubleValue }}
    onClick={this.onClick}
    />
 )
})}

</Map>

<div className="view-pin-container">
  <ViewPinModal  
    show={this.state.viewPinModalIsOpen} 
    onClose={this.state.viewPinModalIsOpen} 
    onClick={this.toggleViewPinModal}/>
</div>

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

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey : 'AIzaSyDGqxNDh10YIbriH1cJpPt9cn8TJdCwbFM'
})(MapContainer));

