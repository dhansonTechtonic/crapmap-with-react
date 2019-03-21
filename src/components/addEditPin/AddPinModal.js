import React, { Component } from 'react';
import firebase from './../../firebase.js';
import LineDivider from './LineDivider';
import CategoryButtons from '../buttons/CategoryButtons';
import BoxButtons from '../buttons/BoxButtons.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ImageButton from '../buttons/ImageButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import store from '../../redux/store/index';
import InputAdornment from '@material-ui/core/InputAdornment'
import Arrow from '../assets/crapmap-locator.png';
import {newPin} from '../../redux/actions/pinActions';


class AddPinModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "Funiture",
            img:"pinsImages/1553121301840",
            address:"2000 Central Ave, Boulder, CO 80301, USA",
            lat:"40.02091167969599",
            lng:"-105.21724804969578",
            size:"1",
            title:"Stinky Boulder Weed Couch",
            userID:"M8S8oXSgSdWzOBlSKM09xnUzsRH2"
        }
        this._changeCategory = this._changeCategory.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.autocomplete = '';
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });

    };

    _handleImg(img){
        this.setState({
            dataURL: img,
        })
    }

     async _uploadImg(){
        if(this.state.dataURL){
            return new Promise((resolve, reject) => {
                let storage = firebase.storage();
                let firebaseImageUrl = storage.ref(`pinsImages/${new Date().getTime()}`).put(this.state.dataURL).then((snapshot) => {
                    this.setState({fireBaseStorageFullUrl: snapshot.metadata.fullPath });
                    return(snapshot.metadata.fullPath);
                })
                firebaseImageUrl ? resolve(firebaseImageUrl) : reject (false)
            })
        }
     }

    _changeCategory(category) {
        switch (category) {
            case "Auto Parts":
                this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
                break;
            case "Sports":
                this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
                break;
            case "Gadgets":
                this.setState({ category: "Electronics" }, () => { console.log(this.state.category) });
                break;
            case "question-circle":
                this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
                break;
            default:
                this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    
    handleLocationChange = (e) =>{
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let userID;

        if (store.getState().user.userID){
            userID = store.getState().user.userID;
        } else {
            userID = JSON.parse(localStorage.getItem('userID'));
        }

        this._uploadImg().then( () => {
                let pin = {
                    "title": this.state.title,
                    // "description": this.state.description
                    "lat": this.state.lat,
                    "lng": this.state.lng,
                    "address": this.state.location,
                    "category": this.state.category,
                    "img": this.state.fireBaseStorageFullUrl,
                    "size": this.state.size,
                    "userID": userID
                }
                console.log(pin);
                store.dispatch(newPin(pin));
            }
        ).catch( err => console.log('there has been an error' + err));
       
    }

    _getCurrentLocation = async() =>{
        if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition((position) => {

            let coordObject = {
                lat:  position.coords.latitude.toString(),
                lng: position.coords.longitude.toString()
            }

            fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/map/reverse-geo-code',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(coordObject),
            })
            .then(response => response.json())
            .then( data =>{
                console.log(data);
                let address = data.results[0].formatted_address;
                console.log(address);

                this.setState({
                    location: address,
                    lat:  position.coords.latitude,
                    lng: position.coords.longitude
                })
            }).catch(console.log('An Error has occured'));

         });
        }else{
            console.log('geolocation not availiable');
        }
         
    }

    _boxSize(value){
        this.setState({
            size: value
        })
    }

    handlePlaceSelect(){
        let options = { types: ['geocode']};
        let locationInput = document.getElementById('pinLocation');
        this.autocomplete = new this.props.google.maps.places.Autocomplete(locationInput,options);
        var place = this.autocomplete.getPlace();
        console.log(place);


    }

    componentDidMount(){
        let options = { types: ['geocode']};
        let locationInput = document.getElementById('pinLocation');
        this.autocomplete = new this.props.google.maps.places.Autocomplete(locationInput,options);

        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
        this.autocomplete.setFields('address_components');

    }
 
    
    render() {
        return (
            <div>
                <IconButton className="new-pin-button" onClick={this.handleClickOpen('paper')}>
                    <FontAwesomeIcon icon="plus-circle" />
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    style={{'z-index': 30, 'background-color': 'primary'}}
                >
                    <DialogTitle >
                        ADD NEW CRAP
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <CategoryButtons  sendValue={this._changeCategory}/>
                            <TextField
                                id="outlined-name"
                                label="Title"
                                className="pinTitle"
                                value={this.state.name}
                                onChange={this.handleTitleChange}
                                margin="normal"
                                variant="outlined"
                                placeholder="Name your crap"
                                required
                            />
                            <TextField
                                id="pinLocation"
                                label="Location"
                                className="outlined-name"
                                value={this.state.location}
                                ref="locationInput"
                                onChange={this.handlePlaceSelect}
                                margin="normal"
                                variant="outlined"
                                placeholder="Where that crap at?"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={this._getCurrentLocation} >
                                                <img class="marker-style" src={Arrow} style={{ width: 30, height: 30, marginRight: -10 }}></img>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <BoxButtons sendValue={this._boxSize.bind(this)} />
                            <ImageButton sendData={this._handleImg.bind(this)}/>
                            <LineDivider />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} onClick={this.handleSubmit} color="primary">POST</Button>
                        <Button onClick={this.handleClose} color="error">CANCEL</Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

AddPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default AddPinModal