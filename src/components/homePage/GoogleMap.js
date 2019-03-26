import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, In } from 'google-maps-react';
import { isAbsolute } from 'path';
import store from '../../redux/store'
import {connect} from 'react-redux';
import styles from './GoogleMapsJSON.json';
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
      viewCardIsOpen: false,
      user: {},
      pins: [],
      pinData: {}, 
      dibState: true,
      centerAroundCurrentLocation: true,
      }
      this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
    };

  toggleViewPinModal(e) {
    let targetPin = e;
    console.log(targetPin)
    this.setState({
      viewCardIsOpen: true,
      pinData: targetPin
    });
    // console.log(this.state)
  }

  componentDidUpdate(prevProps) { 
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  findColor (category) {
    let icon;
    if (!this.state.dibState) {
      return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 6, strokeColor: '#6f6d75' }
    }
      switch (category) {
        case "Furniture":
          return  icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor: '#ff4700' }
          break;

        case "Auto Parts" :

        return  icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor: '#fd589d' }
          break;

        case "Sports": 
         return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor:'#e344ff'  }
          break;

        case "Gadgets": 
          return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor: '#7328ff' }
          break;

        case "Miscellaneous":
          return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor: '#478dff' }
          break;

        default: 
         return icon = {path: window.google.maps.SymbolPath.CIRCLE, scale: 4, strokeColor: '#478dff' }
         break;
      }
  }
  
  findZip(zipCode) {
  }

  // changeIcon (e) {
  //   console.log(e)
  //   return e.icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 6, strokeColor: '#6f6d75' }
  // }

 render() { 
  if (!this.props.loaded) {
    return (<div><h1>Loading...</h1></div>)
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
    active={this.state.dibState}
    // pin = {pin}
    name={pin._fieldsProto.title.stringValue}

    icon={this.findColor(pin._fieldsProto.category.stringValue)}

    category={pin._fieldsProto.category.stringValue}
    itemSize={pin._fieldsProto.size.stringValue}
    // img={pin._fieldsProto.img.stringValue}
    position={{ lat:pin._fieldsProto.location.mapValue.fields.lat.doubleValue,
                lng:pin._fieldsProto.location.mapValue.fields.lng.doubleValue }}
    onClick={this.toggleViewPinModal}
  />
  )}
)}

</Map>


<ViewPinModal show={this.state.viewCardIsOpen} data={this.state.pinData} onClick={this.toggleViewPinModal} /> 


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

