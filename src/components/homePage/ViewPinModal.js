import React, { Component } from 'react'
import {connect} from 'react-redux';

import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import LineDivider from '../addEditPin/LineDivider'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../assets/oldcouch.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  }

  componentDidUpdate(prevProps) { 
    // reduces pins promise to just pin array on update
    if (this.props.pins !== prevProps.pins) {
      this.props.pins.then((val) => { this.setState({ pins: val.pins }) })
    }
  }

  handleItemSize(sizeData){
    switch (sizeData) {
      case "1" :
        return  (
        <Typography component="p">
          SIZE : SMALL <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
      case "2" : 
      return  (
        <Typography component="p">
          SIZE : MEDIUM <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
      case "3" :
      return  (
        <Typography component="p">
          SIZE : LARGE <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
    }
  }

  render() {

    if (!this.props.show) {
        return null;
    }

    return (

      <div >
          <Dialog
          open={this.props.show}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary' }}>

            <DialogContent>               
            <Card className={styles.card}>
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
                CATEGORY : {this.props.data.category}
              </Typography>

              {this.handleItemSize(this.props.data.itemSize)}
            </CardContent>
          <LineDivider />
          <CardActions>
            <Button size="medium" color="primary" onClick={this.handleDibs}>
              DIBS
            </Button>
            <Button size="medium" color="primary" onClick={this.props.onClick}>
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



