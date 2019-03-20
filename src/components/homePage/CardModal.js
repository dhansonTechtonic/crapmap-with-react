import React, { Component } from 'react'
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LineDivider from '../addEditPin/LineDivider'
import { Dialog } from '@material-ui/core';
import image from '../assets/oldcouch.jpg'
// import zIndex from '@material-ui/core/zIndex'
import  zIndex from '@material-ui/system';
import { spacing } from '@material-ui/system';
import Tab from '@material-ui/core/Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabs from '@material-ui/core/Tabs';


const styles = {
  card: {
    maxWidth: 375,
  },
  media: {
    height: 240,
  }
};



class CardModal extends Component {
    constructor (props){
        super(props)
        this.state = {
            open: true,
        }       
    }

    handleClose = () => {
        this.setState({ open : false });
      };
    
render () {

    if (!this.props.show) {
        return null;
    }
    let name = this.props.data.name
    let size = this.props.data.crapSize
    // let category = this.props.data.category
    
        return (

            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
            style={{ 'z-index': 30, 'background-color': 'primary' }}>
        <Card className={styles.card}>
        
          <CardActionArea >
            <CardMedia
              component="img"
              alt="Item"
              className={styles.media}
              style={{ 'z-index': 30, 'background-color': 'primary' }}
              height="300"
              image={image}
              title={name}
            />
    
            <CardContent>
    
              <Typography gutterBottom variant="h5" component="h1">
              {name}
            
              </Typography>
    
              <Typography component="p">
                {size}
                <Tabs><Tab icon={<FontAwesomeIcon icon='box' />} label="MEDIUM"/></Tabs>
              </Typography>
        
            </CardContent>
            <LineDivider />
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary">
              DIBS
            </Button>
            <Button size="medium" color="primary">
              PASS
            </Button>
            <Button onClick={this.handleClose} color="error">
              CLOSE
            </Button>

          </CardActions>
        </Card>
      );
}
 
}

export default connect(mapStateToProps)(withStyles(styles)(CardModal));

CardModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  function mapStateToProps(reduxState){
    return {
      user: reduxState.user,
      pins: reduxState.pins
    }
  }