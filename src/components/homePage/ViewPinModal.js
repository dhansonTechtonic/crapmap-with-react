import React, { Component } from 'react'
import {connect} from 'react-redux';

import PropTypes from 'prop-types'
// import CardModal from '../homePage/CardModal'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import LineDivider from '../addEditPin/LineDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {image} from ''

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
    //   open: false,
      user: {},
      pins: [],
      pinData: {},
      active: true
    }
    this.handleClose.bind(this)
    // this.handleChange.bind(this)
  }
    
  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  handleClose (e) {
    e.preventDefault();
    this.setState({ open: false });
  };

  render() {
      const pin = this.props.data;
    //   console.log(pin.name)
    if (!this.props.show) {
        return null;
    }

    return (
      <div >
          <Dialog
        //   open={this.state.open}
        //   onClose={this.handleClose}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>

            <DialogContent>               
        <Card className={styles.card}>
        
          <CardActionArea >
            <CardMedia 
              component="img"
              alt="Item"
              className={styles.media}
              style={{ 'z-index': 30, 'background-color': 'primary' }}
              height="300"
            //   image={this.pinData.}
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
          <LineDivider />
          <CardActions>
            <Button size="medium" color="primary">
              DIBS
            </Button>
            <Button size="medium" color="primary" onClick={this.handleClose}>
              CLOSE
            </Button>
          </CardActions>
        </Card>

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

export default connect(mapStateToProps)(withStyles(styles)(ViewPinModal));



