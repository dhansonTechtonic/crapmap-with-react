import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = {
    root: {
        width: 545,
        zIndex: 50,
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        marginLeft: '-272.5px',
        borderRadius: 4
    },
};

class SortButtons extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="sort-buttons">
                <BottomNavigation value={this.state.value} onChange={this.handleChange} className={classes.root}>
                    <BottomNavigationAction id="bnFurniture" label="Furniture" value="Furniture" style={{fontSize: '1.5em'}} icon={<FontAwesomeIcon icon='couch' />} />
                    <BottomNavigationAction id="bnAuto" label="Auto Parts" value="Auto Parts" style={{ fontSize: '1.5em' }} icon={<FontAwesomeIcon icon='car' />}/>
                    <BottomNavigationAction id="bnSports" label="Sports" value="Sports" style={{ fontSize: '1.5em' }} icon={<FontAwesomeIcon icon='baseball-ball' />}/>
                    <BottomNavigationAction id="bnGadgets" label="Gadgets" value="Gadgets" style={{ fontSize: '1.5em' }} icon={<FontAwesomeIcon icon='tv' />} />
                    <BottomNavigationAction id="bnMisc" label="Misc" value="Misc" style={{ fontSize: '1.5em' }} icon={<FontAwesomeIcon icon='question-circle' />}/>
                    <BottomNavigationAction id="bnAll" label="All" value="All" style={{ fontSize: '1.5em' }} icon={<FontAwesomeIcon icon='infinity' />} />
                </BottomNavigation>
            </div>
        );
    }
}

SortButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortButtons);