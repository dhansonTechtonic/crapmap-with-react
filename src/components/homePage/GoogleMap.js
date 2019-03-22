import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, In } from 'google-maps-react';
import { isAbsolute } from 'path';
import store from '../../redux/store'
import {connect} from 'react-redux';
import styles from './GoogleMapsJSON.json';
// import ViewPinModal from './ViewPinModal';
import CardModal from './CardModal';
import ViewPinModal from './ViewPinModal';
// import { func } from 'prop-types';

const mapStylesDefaults = {
  position: isAbsolute,  
  width: '100%',
  height: '100%',
};
export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCardIsOpen: false,
      user: {},
      pins: [],
      pinData: {}
      }
      this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
    };

  toggleViewPinModal(e) {
    let targetPin = e;
    console.log(targetPin.name)
    this.setState({
      viewCardIsOpen: !this.state.viewCardIsOpen,
      pinData: targetPin
    });
  }

  componentDidUpdate(prevProps) { 
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  findColor (category) {
    let icon;
      switch (category) {
        case "Furniture":
          return  icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#FF4700' }
          break;
        case "Auto Parts" :
          return  icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#5200E8' }
          break;
        case "Miscellaneous":
          return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#00FFDE' }
          break;
        case "Sports": 
          return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#FF4700' }
          break;
        case "Gadgets": 
          return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#FF4700' }
          break;
        default: 
          return icon = {path: window.google.maps.SymbolPath.CIRCLE, scale: 7, strokeColor: '#FF4700' }
          break;
      }
  }

 render() {
  if (!this.props.loaded) {
    return (<div>Loading...</div>)
  }
    return (
      <div className='map-container'>

<Map 
    google={this.props.google}
    style={mapStylesDefaults}
    className={'map'}
    zoom={14}  
    centerAroundCurrentLocation={true}
    draggable={true} 
    // minZoom={13} 
    maxZoom={25}
    styles = {styles}
>

{this.state.pins.map((pin) => {
  return (
  <Marker
    key={pin._ref._path.segments[1]}
    active={true}
    pin = {pin}
    name={pin._fieldsProto.title.stringValue}
    icon={this.findColor(pin._fieldsProto.category.stringValue)}
    category={pin._fieldsProto.category.stringValue}
    itemSize={pin._fieldsProto.size.stringValue}
    img={pin._fieldsProto.img.stringValue}
    position={{ lat:pin._fieldsProto.location.mapValue.fields.lat.doubleValue,
                lng:pin._fieldsProto.location.mapValue.fields.lng.doubleValue }}
    
    onClick={this.toggleViewPinModal}
  />
  )}
)}

</Map>


<ViewPinModal show={!this.state.viewCardIsOpen} data={this.state.pinData} />

  
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

