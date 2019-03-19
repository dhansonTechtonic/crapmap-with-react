import React, { Component } from 'react'
import firebase from './../../firebase'
import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import BoxButtons from '../buttons/BoxButtons.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ImageButton from '../buttons/ImageButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import store from '../../redux/store/index';
import { newPin } from '../../redux/actions/pinActions';

const styles = theme => ({
    cssLabel: {
        '&$cssFocused': {
            color: '#00FFDE',
        },
    },
    cssFocused: {}
})
class EditPinModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    _handleImg(img) {
        this.setState({
            dataURL: img,
        })
    }

    _uploadImg() {
        if (this.state.dataURL) {
            let storage = firebase.storage();
            storage.ref(`pinsImages/${new Date().getTime()}`).put(this.state.dataURL).then((snapshot) =>
                console.log(snapshot));
        } else {
            return false
        }
        return false
    }


    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let pin = {
            "title": this.state.title,
            // "description": this.state.description
            "lat": this.state.location,
            "lng": this.state.location,
            "zip": this.state.location,
            "category": this.state.category,
            "img": this.state.dataURL,
            "size": '2',
            "userID": 'testID'
        }

        store.dispatch(newPin(pin));

    }

    render() {
        const { classes } = this.props;
        return (
            <div id="ap-modal" className={classes.root}>
                <IconButton className="new-pin-button" onClick={this.handleClickOpen('paper')}>
                    <FontAwesomeIcon icon="plus-circle" />
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    style={{ 'z-index': 30, 'background-color': 'primary' }}
                >
                    <DialogTitle >
                        Edit This Crap
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <form>
                            <CategoryButtons handleClick={this.handleClick} />
                            <TextField
                                classes={{
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                }}
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
                                classes={{
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                }}
                                id="outlined-name"
                                label="Location"
                                className="pinLocation"
                                value={this.state.location}
                                onChange={this.handleLocationChange}
                                margin="normal"
                                variant="outlined"
                                placeholder="Where that crap at?"
                            />
                            <BoxButtons />
                            <ImageButton sendData={this._handleImg.bind(this)} />
                            <LineDivider />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="error">Delete</Button>
                        <Button onClick={this.handleClose} onClick={this.handleSubmit} color="primary">POST</Button>
                        <Button onClick={this.handleClose} color="error">CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

EditPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default withStyles(styles)(EditPinModal)