import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class CategoryButtons extends React.Component {
  state = {
    value: "Furniture",
  };

  handleChange = (event, value) => {
    console.log(value)
    this.setState({ value });
    this.props.sendValue(value);
  };

  componentDidMount(){
    if(this.props.value){
      this.setState({
        value: this.props.value
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="wrapper"
          indicatorColor="primary"
          textColor="primary"
          style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        >
          <Tab id="catFurniture" className="cat-unselected" value="Furniture"icon={<FontAwesomeIcon icon='couch' />} label="Furniture"/>
          <Tab id="catAuto" value="Auto Parts" icon={<FontAwesomeIcon icon='car' />} label="Auto Parts" className="cat-unselected"/>
          <Tab id="catSports" value="Sports" icon={<FontAwesomeIcon icon='baseball-ball' />} label="Sports" className="cat-unselected"/>
        </Tabs>
      </Paper>
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="wrapper"
          indicatorColor="primary"
          textColor="primary"
          style={{display: "flex", flexDirection: "row", justifyContent: "center"}}
        >
          <Tab id="catGadgets" value="Gadgets" icon={<FontAwesomeIcon icon='tv' />} label="Gadgets" className="cat-unselected" />
          <Tab id="catMisc" value="Misc" icon={<FontAwesomeIcon icon='question-circle' />} label="Misc" className="cat-unselected" />
        </Tabs>
      </Paper>
      </div>
    );
  }
}

CategoryButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryButtons);