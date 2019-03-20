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


const styles = {
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 240,
  }
};



class CardModal extends Component {
    constructor (props){
        super(props)
        this.state = {
            isOpen: false,
        }       
    }
    
render () {

    if (!this.props.show) {
        return null;
    }
    let name = this.props.data.name.stringValue
    let img = this.props.data.img.stringValue
    console.log(this.props.data)
    return (


        <Card className={styles.card} style={{ 'z-index': 30, 'background-color': 'black' }} zIndex={30}>>
        
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Item"
              className={styles.media}
              style={{ 'z-index': 30, 'background-color': 'primary' }}
              height="250"
              image={img}
              title={name}
            />
    
            <CardContent>
    
              <Typography gutterBottom variant="h5" component="h2">
              {/* {location} */}

              </Typography>
    
              <Typography component="p">
                {name}
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