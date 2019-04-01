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
                <BottomNavigation value={this.state.value} onChange={this.handleChange} className={classes.root} id="bn-tabs">

                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("Furniture")
                    }} id="bnFurniture" label="Furniture" value="Furniture" style={{ fontSize: '1.5em', color: '#ff4700'}} icon={<FontAwesomeIcon icon='couch' />}/>
                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("Auto Parts")
                    }} id="bnAuto" label="Auto Parts" value="Auto Parts" style={{ fontSize: '1.5em', color: 'rgb(253, 88, 157)' }} icon={<FontAwesomeIcon icon='car' />}/>
                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("Sports")
                        }} id="bnSports" label="Sports" value="Sports" style={{
                            fontSize: '1.5em', color: 'rgb(227, 68, 255)' }} icon={<FontAwesomeIcon icon='baseball-ball' />}/>
                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("Gadgets")
                    }} id="bnGadgets" label="Gadgets" value="Gadgets" style={{ fontSize: '1.5em', color: 'rgb(135, 71, 255)' }} icon={<FontAwesomeIcon icon='tv' />}/>
                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("Misc")
                    }} id="bnMisc" label="Misc" value="Misc" style={{ fontSize: '1.5em', color: 'rgb(71, 141, 255)' }} icon={<FontAwesomeIcon icon='question-circle' />}/>
                    <BottomNavigationAction onClick={() => {
                        this.props.categoryChange("All")
                    }} id="bnAll" label="All" value="All" style={{ fontSize: '1.5em', color: '#00FFDE'  }} icon={<FontAwesomeIcon icon='infinity' />}/>

                </BottomNavigation>
            </div>
        );
    }
}

SortButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortButtons);