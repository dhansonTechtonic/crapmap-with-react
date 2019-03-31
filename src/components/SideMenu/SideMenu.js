import React, { Component } from 'react'
import LineDivider from '../addEditPin/LineDivider'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import SMMyListingsModal from './SMMyListingsModal'
import SMMyAccountModal from './SMMyAccountModal'
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
                <ul style={{'list-style-type': 'none'}}>
                    <SMMyListingsModal />
                    <SMMyAccountModal />
                </ul>
                <LineDivider />
                  <Button onClick={this.toggleDrawer(false)} style={{ marginLeft: 14}}>
                    CLOSE
                </Button>           
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
                >
                    {sideList}
                </div>
            </SwipeableDrawer>
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
