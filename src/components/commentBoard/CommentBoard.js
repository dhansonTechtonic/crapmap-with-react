import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardActions, Paper, CardHeader } from '@material-ui/core';

export default class CommentBoard extends Component {
    constructor(props){
        super(props)
    }
    state = {
        comment: '',
        comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
  render() {
    const { classes } = this.props;
    return (
    <Card>
        <CardContent style={{ padding: 10, height: 392 }}>
            <Paper style={{'overflow-y': 'scroll', height: 390}}>
                {this.props.comments.map((comment) => {
                    return (
                        // <Typography gutterBottom variant="h5" component="p">
                        //     {this.props.comment.author}
                        // </Typography>
                        <Typography component="p">
                        Comment here. 
                         {/* {this.props.comment} */}
                        </Typography>
                    )})}
             </Paper>
        </CardContent>
        <CardActions>
            <form>
            <TextField 
                id="outlined-name"
                label="Comment"
                // className={classes.textField}
                value={this.state.comment}
                onChange={this.handleChange('comment')}
                margin="normal"
                variant="outlined"
                placeholder="Add a comment"/>
            <Button style={{margin: 6, top: '28px', color: 'primary'}}>SUBMIT</Button>
            </form>
        </CardActions>
    </Card>
    )
  }
}

CommentBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};
