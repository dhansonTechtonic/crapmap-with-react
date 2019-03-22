import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardModal from '../homePage/CardModal'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import LineDivider from '../addEditPin/LineDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import {connect} from 'react-redux';
import store from '../../redux/store';

import { IconButton } from '@material-ui/core';

import {deletePin} from '../../redux/actions/pinActions'

const styles = {
    card: {
      maxWidth: 375,
    },
    media: {
      height: 240,
    }
  };
class ViewPinModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: {},
      pins: [],
      pinData: {}
    }
  }
    
  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  
CardModal (data) {
      
    const { classes } = props;
  
  
      let name = this.props.data.name
      let size = this.props.data.crapSize
      let category = this.props.data.category
      console.log(name, "this is props")
  
      
          return (
          <Card className={classes.card}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                alt="Item"
                className={classes.media}
                style={{ 'z-index': 30, 'background-color': 'primary' }}
                height="300"
              //   image={image}
              //   title={name}
              />
      
              <CardContent>
      
                <Typography gutterBottom variant="h5" component="h1">
                {/* {name} */}
                  title
                </Typography>
      
                <Typography component="p">
                  {/* {size} */}
                  size
                  {/* <Tabs><Tab icon={<FontAwesomeIcon icon='box' />} label="MEDIUM"/></Tabs> */}
                </Typography>
          
              </CardContent>
            </CardActionArea>
            {/* <LineDivider /> */}
  
            <CardActions>
              <Button size="medium" color="primary">
                DIBS
              </Button>
              <Button size="medium" color="primary">
                PASS
              </Button>
  
            </CardActions>
          </Card>
        );
  }

  render() {
      const {pin} = this.props.data;
      console.log(pin);
    if (!this.props.show) {
        return null;
    }
    return (
      <div >
          <Dialog
        //   open={this.state.open}
        //   onClose={this.handleClose}
        //   scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>

            <DialogContent>
              <CardModal data={pin}/>
            </DialogContent>

          </Dialog>
        </div>
      )
  }
}
        
ViewPinModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}
        
function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    pins: reduxState.pins
  }
}

export default connect(mapStateToProps)(ViewPinModal);

