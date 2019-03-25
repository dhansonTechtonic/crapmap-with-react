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
import image from '../assets/oldcouch.jpg'


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
      show: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleDibs = this.handleDibs.bind(this)
  }
    
  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }


  handleClose(e) {
    e.preventDefault();
    this.setState({ 
        open: false 
    });
  };

  handleItemSize(data){
    console.log("item", data)
  }

  handleDibs(e) {
      e.preventDefault();
      console.log(e.target)
      // return (
      //   <Marker
      //   key={pin._ref._path.segments[1]}
      //   active={this.setState({active: false})}
      //   // pin = {pin}
      //   name={pin._fieldsProto.title.stringValue}
      //   icon={this.findColor(pin._fieldsProto.category.stringValue)}
      //   category={pin._fieldsProto.category.stringValue}
      //   itemSize={pin._fieldsProto.size.stringValue}
      //   // img={pin._fieldsProto.img.stringValue}
      //   position={{ lat:pin._fieldsProto.location.mapValue.fields.lat.doubleValue,
      //               lng:pin._fieldsProto.location.mapValue.fields.lng.doubleValue }}
      //   onClick={this.toggleViewPinModal}
      // />
      // )
  }

  render() {
    //   const pin = this.props;
      console.log(this.props.data.itemSize, "name props from modal")

    if (!this.props.show) {
        return null;
    }

    return (
      <div >
          <Dialog
          open={this.props.show}
          onClose={this.handleClose}
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
              image={image}
            //   image={this.props.pinData.image}
            //   title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
              {this.props.data.name}
              </Typography>
    
              <Typography component="p">
                {this.props.data.category}
              </Typography>
              
              <Typography component="p">
                {this.props.data.itemSize}
                {/* {this.handleItemSize(this.props.data.itemSize).bind(this)} */}
              </Typography>

            </CardContent>
          </CardActionArea>
          <LineDivider />
          <CardActions>
            <Button size="medium" color="primary" onClick={this.handleDibs}>
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



