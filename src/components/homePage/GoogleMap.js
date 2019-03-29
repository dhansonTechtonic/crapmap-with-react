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
      pinCommentsState: null,
      pinAddress: null
      }
      this.toggleViewPinModal = this.toggleViewPinModal.bind(this)
      this.toggleViewPinModalClose = this.toggleViewPinModalClose.bind(this)
    };

  async toggleViewPinModal(e) {
    let targetPin = e;
    let pinID = e.pinID
    let imgURL = await this.handleImageURL(targetPin.img)
    let pinComments = await this.getComments(pinID)
    let pinAddress = await this.getAddress(e.position)
    this.setState({
      viewCardIsOpen: !this.state.viewCardIsOpen,
      pinData: targetPin,
      img: imgURL,
      pinCommentsState: pinComments,
      pinAddress: pinAddress
    });
  }

  toggleViewPinModalClose = () => {
    this.setState({
      viewCardIsOpen: false,
      pinData: {}, 
      img: null,
      pinCommentsState: null,
      pinAddress: null
    });
  }

  componentDidUpdate(prevProps) { 
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  findColor = (category) => {
    let icon;
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
    let url = await storageRef.getDownloadURL()
    .then((url) => url)
    .catch( () =>
      'https://firebasestorage.googleapis.com/v0/b/crapmap-c5c7f.appspot.com/o/assets%2FcrapmapLogoWhite.png?alt=media&token=8fcd6ae0-460f-4fb7-9504-866dab987042'
    );
    return url
  }

  async getComments(pinID){
    let commentsData = fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/comments/get/' + pinID)
    .then((response) => response.json() )
    .then((response) =>  response )
    .catch( (error) =>  console.log(error) )
    return commentsData
  }

  async getAddress(pinLocation){
    let addressObj = {lat: pinLocation.lat, lng: pinLocation.lng}
    let pinAddress = await fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/map/reverse-geo-code', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addressObj),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "OK") {
          let address = data.results[0].formatted_address;
          return address
        }
      }).catch(console.log('An Error has occured'));
      return pinAddress
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
    maxZoom={25}
    styles = {styles}>

 {this.state.pins.map((pin) => {
  return (
    <Marker
      key={pin._ref._path.segments[1]}
      pinID={pin._ref._path.segments[1]}
      name={pin._fieldsProto.title.stringValue}
      icon={this.findColor(pin._fieldsProto.category.stringValue)}
      category={pin._fieldsProto.category.stringValue}
      itemSize={pin._fieldsProto.size.stringValue}
      img={pin._fieldsProto.img.stringValue}
      position={{ lat:pin._fieldsProto.location.mapValue.fields.lat.doubleValue,
                lng:pin._fieldsProto.location.mapValue.fields.lng.doubleValue }}
      onClick={ this.toggleViewPinModal }
  />
  )}
  )}
</Map>

<ViewPinModal show={this.state.viewCardIsOpen} data={this.state.pinData} img={this.state.img} onClick={this.toggleViewPinModalClose} comments={this.state.pinCommentsState} address={this.state.pinAddress} /> 

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

