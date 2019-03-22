import React, { Component } from 'react'
import LineDivider from '../addEditPin/LineDivider'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import MyListingsPost from '../MyListings/MyListingsPost'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SideMenu extends Component {
    constructor(props) {
        super(props);
    this.state = {
        right: false,
        open: false,
        scroll: 'paper',
    };
}

    toggleDrawer = (open) => () => {
        this.setState({
            right: open,
        });
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


  render(props) {

      const { classes } = this.props;

      const sideList = (
          <div className={classes.list}>
              <List>
                  {<ListItem >
                      <ListItemText onClick={this.handleClickOpen('paper')} style={{color: 'white', cursor: 'pointer'}}>
                        MY CRAP
                    </ListItemText>
                  </ListItem>}
              </List>
              <List>
              {<ListItem >
                  </ListItem>}
                  <LineDivider />            
              </List>
          </div>
      );
    return (
        <div>
            <Button onClick={this.toggleDrawer(true)} className="nav-links">MENU</Button>
            <SwipeableDrawer
                open={this.state.right}
                onClose={this.toggleDrawer(false)}
                onOpen={this.toggleDrawer(true)}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    {sideList}
                </div>
            </SwipeableDrawer>

            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
                style={{ 'z-index': 30, 'background-color': 'primary' }}>
                <DialogTitle>
                    MY CRAP
            </DialogTitle>
                <LineDivider />
                <DialogContent>
                    <MyListingsPost />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="error">CLOSE</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
  }
}

SideMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu)
