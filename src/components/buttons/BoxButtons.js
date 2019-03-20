import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class BoxButtons extends React.Component {
  state = {
    value: 0,
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
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="primary"
        >
          <Tab value="1" icon={<FontAwesomeIcon icon='box' />} label="SMALL"/>
          <Tab value="2" icon={<FontAwesomeIcon icon='box' />} label="MEDIUM"/>
          <Tab value="3" icon={<FontAwesomeIcon icon='box' />} label="LARGE"/>
        </Tabs>
      </Paper>
    );
  }
}

BoxButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoxButtons);