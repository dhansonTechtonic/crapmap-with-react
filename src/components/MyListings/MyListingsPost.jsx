import React, { Component } from 'react'
import image from '../assets/oldcouch.jpg'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditPinModal from '../addEditPin/EditPinModal'
import Button from '@material-ui/core/Button'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

//let posts = this.state.pins.map((pin) => {

      // each post needs key (unique property)
      // also need to ensure on the front end that no posts get submitted with a single empty field.

     // console.log(pin);

    //   return <div className='pin-card'>
    //     <span className='my-pin-image'></span>
    //     <p className='my-pin-title'>{pin._fieldsProto.title.stringValue}</p>
    //     <p className='my-pin-category'>{pin._fieldsProto.category.stringValue}</p>
    //     <p className='my-pin-category'>{pin._ref._path.segments[1]}</p>

    //     <button className='my-pin-delete' onClick={() => {
    //       this.handleDeletePin(pin._ref._path.segments[1])
    //     }}></button>
    //   </div>
    // })
        
function MyListingsPost(props){
  const { classes } = props;
       
  // need endpoint for get all pins by userID

  // let pinArray = store.dispatch(()) 
  // or
  // let pinArray = fetchMyPins();


  // function handleDeletePin(input){
  //   store.dispatch(deletePin(input));
  // }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="My ipsum crap."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My ipsum crap.
        </Typography>
          <Typography component="p">
            At this place in this town, CO 80021
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <EditPinModal />
      {/* <Button color="error" style={{ left: 110, display: 'block' }} onClick={() => {
          this.handleDeletePin(pin._ref._path.segments[1])
        }}>Delete</Button> */}
      </CardActions>
    </Card>
  )
}

MyListingsPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyListingsPost);