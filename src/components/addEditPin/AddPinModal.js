import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import BoxButtons from '../buttons/BoxButtons.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'

import '../App.css'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    cssLabel: {
        '&$cssFocused': {
            color: '#00FFDE',
        },
    },
    cssFocused: {}
})
class AddPinModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            open: false,
            scroll: 'paper'
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

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
                    style={{'z-index': 30, 'background-color': 'primary'}}
                >
                    <DialogTitle >
                        Add New Pin
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <form>
                            <CategoryButtons />
                            <TextField
                                classes={{
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                }}
                                id="outlined-name"
                                label="Title"
                                className="pinTitle"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
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
                                onChange={this.handleChange('location')}
                                margin="normal"
                                variant="outlined"
                                placeholder="Where that crap at?"
                            />
                            <BoxButtons />
                            <IconButton>
                                <FontAwesomeIcon icon="camera"/>
                            </IconButton>
                            <LineDivider />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">POST</Button>
                        <Button onClick={this.handleClose} color="tertiary">CANCEL</Button>
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

export default withStyles(styles)(AddPinModal)