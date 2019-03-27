import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { isAbsolute } from 'path';
import {connect} from 'react-redux';
import styles from './GoogleMapsJSON.json';
import ViewPinModal from './ViewPinModal';
import firebase from './../../firebase.js'

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
      pins: [],
      pinData: {}, 
      img: null,

      }
      this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
      this.toggleViewPinModalClose = this.toggleViewPinModalClose.bind(this)
    };

  async toggleViewPinModal(e) {
    let targetPin = e;
    let imgURL = await this.handleImageURL(targetPin.img)
    this.setState({
      viewCardIsOpen: !this.state.viewCardIsOpen,
      pinData: targetPin,
      img: imgURL
    });
  }

  toggleViewPinModalClose() {
    this.setState({
      viewCardIsOpen: false,
    });
  }

  componentDidUpdate(prevProps) { 
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  findColor (category) {
    let icon;
    if (category === false) {
      return icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 6, strokeColor: '#6f6d75' }
    }
      switch (category) {
        case "Furniture":
          icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor: '#ff4700' }
          break;

        case "Auto Parts" :
          icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor: '#fd589d' }
          break;

        case "Sports": 
          icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor:'#e344ff'  }
          break;

        case "Gadgets": 
          icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor: '#7328ff' }
          break;

        case "Miscellaneous":
        icon = { path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor: '#478dff' }
          break;

        default: 
         icon = {path: window.google.maps.SymbolPath.CIRCLE, scale: 5, strokeColor: '#478dff' }
         break;
      }
      return icon;
  }

  async handleImageURL(imgurl) {
    
    let storage = firebase.storage();
    let storageRef = storage.ref(imgurl);
    let url = await storageRef.getDownloadURL().then(function(url) {
      return url
    }).catch(function(error) {
      console.log(error);
      return 'https://firebasestorage.googleapis.com/v0/b/crapmap-c5c7f.appspot.com/o/assets%2FcrapmapLogoWhite.png?alt=media&token=8fcd6ae0-460f-4fb7-9504-866dab987042'
    });
    return url
  }

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
)
}

</Map>

<ViewPinModal show={this.state.viewCardIsOpen} data={this.state.pinData} img={this.state.img} onClick={this.toggleViewPinModalClose} handleDibsClick={this.handleDibState} /> 

</div> 
    )
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

