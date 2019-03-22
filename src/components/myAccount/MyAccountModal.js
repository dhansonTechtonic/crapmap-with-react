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

import '../../.././src/components/App.css'
import store from '../../redux/store'
import {logOutUser} from '../../redux/actions/userActions';

import {deleteUser, getFirebaseUser} from '../../firebase.js'
import ChangePasswordForm from './../landingPage/ChangePassword'
import { red } from '@material-ui/core/colors';

const styles = {
    card: { maxWidth: 345 },
    media: { height: 140 },
    root: {
        // height: 10,
    }

};

// const deleteButtonStyle = {
//     color: "red",
// }


class MyAccountModal extends Component{
    constructor(){
        super()
        this.state = {
            open: false,
            scroll: 'paper',
            displayName: '',
            email: ''
        }
    }

    

    async componentDidMount(){
        
    }

    handleClickOpen = scroll => async () => {
        this.setState({ open: true, scroll });
        let currentUser = await getFirebaseUser();
        this.setState({
            displayName: currentUser.displayName,
            email: currentUser.email
        })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleDelete() {
        //delete action
        deleteUser();
        store.dispatch(logOutUser());
    }

    handleLogOut() {
        store.dispatch(logOutUser());
    
    }

    // InlineStyle() {
    //     return <Button style={{deleteButtonStyle}}></Button>;
    // }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <li className="nav-links" onClick={this.handleClickOpen('paper')}>
                    MY ACCOUNT
                </li>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    style={{ 'z-index': 30, 'background-color': 'primary' }}>
                    <DialogTitle>
                        MY ACCOUNT
                        <Button onClick={this.handleLogOut} style={{marginLeft: 70}}>
                            Log Out
                        </Button>
                    </DialogTitle>
                    <LineDivider />
                    <DialogContent>
                        <Typography>
                            Username: {this.state.displayName}
                        </Typography>
                        <Typography>
                            Email: {this.state.email}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={this.handleDelete} 
                            style={{ marginRight: 140, }}
                            classes={{ root: classes.root }}
                            id="deleteAccount"
                        >
                            <p>Delete Account</p>
                        </Button>
                        <ChangePasswordForm />

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
    className: PropTypes.string,
};

export default withStyles(styles)(MyAccountModal);
