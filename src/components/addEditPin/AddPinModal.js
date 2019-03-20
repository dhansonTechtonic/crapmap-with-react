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
import store from '../../redux/store/index';
import {newPin} from '../../redux/actions/pinActions';
import PropTypes from 'prop-types';

class AddPinModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            dataURL: '',
            fireBaseStorageFullUrl:'',
            imgName: null,
            title: '',
            location: '',
            open: false,
            scroll: 'paper',
            dataURL: '',
            imgName: null,
            category: 'All'
        }
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(e) {
        switch (e.target.value) {
            case "car":
                this.setState({ category: 'Auto Parts' }, () => { console.log(this.state.category) });
                break;
            case "baseball-ball":
                this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
                break;
            case "tv":
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
        this._uploadImg().then( () => {
                let pin = {
                    "title": this.state.title,
                    // "description": this.state.description
                    "lat": this.state.location,
                    "lng": this.state.location,
                    "zip": this.state.location,
                    "category": this.state.category,
                    "img": this.state.fireBaseStorageFullUrl,
                    "size": '2',
                    "userID": 'testID'
                }
                console.log(pin);
            }
        ).catch( err => console.log('there has been an error' + err));
        //store.dispatch(newPin(pin));
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
                            <CategoryButtons handleClick={this.handleClick}/>
                            <TextField
                                id="outlined-name"
                                label="Title"
                                className="pinTitle"
                                value={this.state.name}
                                onChange={this.handleTitleChange}
                                margin="normal"
                                variant="outlined"
                                placeholder="Name your crap"
                            />
                            <TextField
                                id="outlined-name"
                                label="Location"
                                className="pinLocation"
                                value={this.state.location}
                                onChange={this.handleLocationChange}
                                margin="normal"
                                variant="outlined"
                                placeholder="Where that crap at?"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton >
                                                <img class="marker-style" src={Arrow} style={{ width: 30, height: 30, marginRight: -10 }}></img>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <BoxButtons />
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