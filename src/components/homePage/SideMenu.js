import React, { Component } from 'react'
import LineDivider from '../addEditPin/LineDivider'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SideMenu extends Component {
    state = {
        right: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            right: open,
        });
    };


  render(props) {

      const { classes } = this.props;

      const sideList = (
          <div className={classes.list}>
              <List>
                  {<ListItem >
                    <ListItemText style={{color: 'white'}}>
                        MY CRAP
                    </ListItemText>
                  </ListItem>}
              </List>
              <List>
              {<ListItem >
                      <ListItemText style={{ color: 'white' }}>
                          LOG OUT
                    </ListItemText>
                  </ListItem>}
                  <LineDivider />            
              </List>
          </div>
      );
    return (
        <div>
            <Button onClick={this.toggleDrawer(true)}>MENU</Button>
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
