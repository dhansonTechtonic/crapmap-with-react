import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import MakePostButton from '../buttons/MakePostButton.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import NewPinButton from '../buttons/NewPinButton'


import '../App.css'

import PropTypes from 'prop-types'

export default class AddPinModal extends Component {
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

        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <NewPinButton onClick={this.handleClickOpen('body')}/>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">
                        Add New Pin
                        <ExitButton />
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <form>
                            <CategoryButtons />
                            <TextField
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
                            <ImageButton />
                            <LineDivider />
                            <MakePostButton />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <MakePostButton onClick={this.handleClose} color="primary"/>
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
