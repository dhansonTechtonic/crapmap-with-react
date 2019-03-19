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

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MyCrapPost(props){
  const { classes } = props;
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
      </CardActions>
    </Card>
  )
}

MyCrapPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCrapPost);


// need gradient divider 