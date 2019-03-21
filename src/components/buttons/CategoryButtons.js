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
    this.setState({ value });
    this.props.sendValue(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="wrapper"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab value="Furniture"icon={<FontAwesomeIcon icon='couch' />} label="Furniture"/>
          <Tab value="Auto Parts"icon={<FontAwesomeIcon icon='car' />} label="Auto Parts"/>
          <Tab value="Sports"icon={<FontAwesomeIcon icon='baseball-ball'/>} label="Sports"/>
          <Tab value="Gadgets"icon={<FontAwesomeIcon icon='tv' />} label="Gadgets"/>
          <Tab value="Misc"icon={<FontAwesomeIcon icon='question-circle' />} label="Misc"/>
        </Tabs>
      </Paper>
    );
  }
}

CategoryButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryButtons);