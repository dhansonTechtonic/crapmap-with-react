import React, { Component } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBoard from '../commentBoard/CommentBoard';

const styles = {
    paper: {
      maxWidth: '1000px'
    },
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

  handleItemSize(sizeData){
    let itemSizeRender;
    switch (sizeData) {
      case "1" :
       itemSizeRender =   (
        <Typography component="p">
          SIZE : SMALL <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
      case "2" : 
      itemSizeRender =   (
        <Typography component="p">
          SIZE : MEDIUM <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
      case "3" :
      itemSizeRender =   (
        <Typography component="p">
          SIZE : LARGE <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
      default :
      itemSizeRender = (
        <Typography component="p">
          SIZE : MEDIUM <FontAwesomeIcon icon='box' />
        </Typography>
        )
        break;
    }
    return itemSizeRender
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    if (this.props.img) {
      return (
        <div >
          <Dialog
          open={this.props.show}
          aria-labelledby="scroll-dialog-title"
          style={{ 'z-index': 30, 'background-color': 'primary'}}
          className={styles.paper}>

            <DialogContent>
            <Card style={{float: 'right', backgroundColor: 'grey', marginLeft: 20}}>
              <CommentBoard />
            </Card>        
            <Card className={styles.card}>
              <CardMedia 
              component="img"
              alt="Item"
              className={styles.media}
              style={{ 'z-index': 30, 'background-color': 'primary' }}
              height="300"
              width="100%"
              image={this.props.img}
              title={this.props.data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
                {this.props.data.name}
              </Typography>
    
              <Typography component="p">
                CATEGORY : {this.props.data.category}
              </Typography>

              <Typography component="p">
                {this.handleItemSize(this.props.data.itemSize)}
              </Typography>

            </CardContent>

          <LineDivider />
          
          <CardActions>
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
}
        
ViewPinModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
  show: PropTypes.bool,
  children: PropTypes.node,
}

export default withStyles(styles)(ViewPinModal);



