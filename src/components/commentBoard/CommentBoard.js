import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardActions, Paper, CardHeader, Avatar } from '@material-ui/core';

import Sentiment from 'sentiment';

import store from '../../redux/store'
import LineDivider from '../addEditPin/LineDivider';

function postComment(input) {

    console.log(JSON.stringify(input));
    fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/comments/comment', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(console.log('then'))
    .catch(console.log('catch'))
}

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

    handleSubmit = () => {
        
        let commentString = this.state.comment;
        let commentSentiment = new Sentiment();
        let commentRating = commentSentiment.analyze(commentString)

        
        if(commentRating.score >= -5) {
            let commentObject = {
                author: 'PLACEHOLDER',
                body: commentString,
                pinID: this.props.pinID,
                userID: JSON.parse(localStorage.getItem('userID'))
            } 
            postComment(commentObject);
            this.setState({
                comment: ''
            });
        } else {
            console.log('in else')
            this.setState({
                comment: 'too negative :('
            })
        }

        console.dir(commentRating);
    }

  render() {
    const { classes } = this.props;
    return (
    <Card>
        <CardContent style={{ padding: 10, height: 392 }}>
                <Paper style={{ 'overflow-y': 'scroll', height: 390, backgroundColor: 'rgb(51, 50, 54)', padding: 10}}>
                {this.props.comments.map((comment) => {
                    let commentData = comment._fieldsProto;

                    return (
                        <div style={{
                            borderColor: 'rgba(46, 45, 49, 0.5)', borderStyle: 'solid', borderWidth: 2, borderRadius: 4, margin: '4px 0px', padding: 4, boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.2)"}}>
                            <div>
                                <Typography gutterBottom variant="h5" component="p" style={{fontSize: 15, fontWeight: 'bold', }}>
                                    {commentData.author.stringValue}
                                </Typography>
                            </div>
                        <Typography component="p" style={{marginLeft: 4}}>
                            {commentData.body.stringValue}
                        </Typography>
                        <LineDivider />
                        </div>
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
            <Button onClick={this.handleSubmit} style={{margin: 6, top: '28px', color: 'primary'}}>SUBMIT</Button>
            </form>
        </CardActions>
    </Card>
    )
  }
}

CommentBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};
