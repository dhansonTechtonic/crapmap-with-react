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
import Tooltip from '@material-ui/core/Tooltip'

class AddPinModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "Funiture",
            img:"pinsImages/1553121301840",
            address:"",
            lat:"40.02091167969599",
            lng:"-105.21724804969578",
            size:"1",
            title:"",
            userID:"",
            locationPlaceHolder: "Where that crap at?",
            titlePlaceHolder:"Name your crap",
            titleLabel:"Title",
            locationLabel:"Location:",
            titleError: false,
            locationError: false,
            locationInputValid: "required"
        }
        this._changeCategory = this._changeCategory.bind(this);
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ 
            open: false, 
            category: "Furniture",
            img:"pinsImages/1553121301840",
            address:"",
            lat:"40.02091167969599",
            lng:"-105.21724804969578",
            size:"1",
            title:"",
            userID:"",
            locationPlaceHolder: "Where that crap at?",
            titlePlaceHolder:"Name your crap",
            titleLabel:"Title",
            locationLabel:"Location:",
            titleError: false,
            locationError: false,
            locationInputValid: "required",
            dataURL: '',
        });

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
                firebaseImageUrl ? resolve(firebaseImageUrl) : reject(false)
            })
        }
     }

    _changeCategory(category){
        switch (category) {
            case "Auto Parts":
                this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
                break;
            case "Sports":
                this.setState({ category: "Sports" }, () => { console.log(this.state.category) });
                break;
            case "Gadgets":
                this.setState({ category: "Gadgets" }, () => { console.log(this.state.category) });
                break;
            case "Misc":
                this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
                break; 
            default:
                this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
            titleError: false,
            titleLabel:"Title"
        })
    }
    
    handleLocationChange = (e) =>{
        this.setState({
            location: e.target.value,
            locationError: false,
            locationLabel:"Location:"
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if(this._formValid()){
            let userID;
            if (store.getState().user.userID){
                userID = store.getState().user.userID;
            } else {
                userID = JSON.parse(localStorage.getItem('userID'));
            }
            this._uploadImg().then( () => {
                    let pin = {
                        "title": this.state.title,
                        "lat": this.state.lat,
                        "lng": this.state.lng,
                        "address": this.state.location,
                        "category": this.state.category,
                        "img": this.state.fireBaseStorageFullUrl,
                        "size": this.state.size,
                        "userID": userID
                    }
                    store.dispatch(newPin(pin));
                    this.handleClose();
                }
            ).catch( err => console.log(err));
        }else{
            return false
        }
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
                if(data.status === "OK"){
                    let address = data.results[0].formatted_address;
                    this.setState({
                        location: address,
                        lat:  position.coords.latitude,
                        lng: position.coords.longitude,
                        locationError: false,
                        locationLabel:"Location:"
                    })
                }
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
 
    _formValid(){
        if(!this.state.location || !this.state.title){
            if(!this.state.location)
            {
                this.setState({
                    locationLabel: "Error: Need Location",
                   locationError: "false"
                })
            }
            if(!this.state.title)
            {
                this.setState({
                    titleLabel: "Error: Need Tittle",
                   titleError: "false"
                })
            }
            return false;
        }else{
            return true;
        }
    }
    
    render() {
        return (
            <div>
                <Tooltip title="Add New Crap">
                <IconButton className="new-pin-button" onClick={this.handleClickOpen('paper')}>
                    <FontAwesomeIcon icon="plus-circle" />
                </IconButton>
                </Tooltip>
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
                                error={this.state.titleError}
                                id="outlined-name"
                                label={this.state.titleLabel}
                                className="pinTitle"
                                value={this.state.name}
                                onChange={this.handleTitleChange}
                                margin="normal"
                                variant="outlined"
                                placeholder= {this.state.titlePlaceHolder}
                            />
                            <TextField
                                disabled
                                id="outlined-name"
                                error={this.state.locationError}
                                label={this.state.locationLabel}
                                className="pinLocation"
                                value={this.state.location}
                                ref="locationInput"
                                onChange={this.handleLocationChange}
                                margin="normal"
                                variant="outlined"
                                placeholder={this.state.locationPlaceHolder}
                                defaultValue="Click for Location >"
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
                        <Tooltip title="Post That Crap">
                            <Button onClick={this.handleSubmit} color="primary">POST</Button>
                        </Tooltip>
                        <Tooltip title="Nevermind">
                            <Button onClick={this.handleClose} color="error">CANCEL</Button>
                        </Tooltip>
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