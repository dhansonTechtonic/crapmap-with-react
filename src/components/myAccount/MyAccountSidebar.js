import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import LineDivider from '../addEditPin/LineDivider';
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ChangePasswordForm from '../landingPage/ChangePassword'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class MyAccountModal extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            scroll: 'paper'
        }
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    doPasswordUpdate = password =>
        auth.currentUser.updatePassword(password);

    render() {
        return (
            <div>
                <ListItemText style={{ color: 'white', cursor: 'pointer' }} onClick={this.handleClickOpen('paper')}>
                    MY ACCOUNT
                    </ListItemText>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    style={{ 'z-index': 30, 'background-color': 'primary' }}>
                    <DialogTitle>
                        MY ACCOUNT
                        <Button style={{ marginLeft: 70 }}>
                            Log Out
                        </Button>
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <Typography>
                            Username: Delaney_hanson
                        </Typography>
                        <Typography>
                            Email: delaney.hanson@techtonic.com
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ marginRight: 140 }}>
                            Delete Account
                        </Button>
                        <Button onClick={this.handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

MyAccountModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAccountModal);
