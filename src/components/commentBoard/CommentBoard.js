import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardActions, Paper, CardHeader } from '@material-ui/core';

import {getFirebaseUser} from '../../firebase.js'

import Sentiment from 'sentiment';

import store from '../../redux/store'

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
        commentAuthor: '',
        comment: '',
        comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    componentDidMount = async () => {
        let currentUser = await getFirebaseUser();

        if (!currentUser.displayName) {
            this.setState({commentAuthor: currentUser.email.match(/^([^@]*)@/)[1]})
        } else {
            this.setState({commentAuthor: currentUser.displayName})
        }

        console.log(this.state)
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = async () => {
        
        let commentString = this.state.comment;
        let commentSentiment = new Sentiment();
        let commentRating = commentSentiment.analyze(commentString)

        

        if(commentRating.score >= -5) {
            let commentObject = {
                author: this.state.commentAuthor,
                body: commentString,
                pinID: this.props.pinID,
                userID: JSON.parse(localStorage.getItem('userID'))
            } 
            postComment(commentObject);
            this.setState({
                comment: ''
            });

            this.props.comments.push(commentObject);
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
            <Paper style={{'overflow-y': 'scroll', height: 390}}>
                {   this.props.comments.map((comment) => {
                    let commentData;

                    if (comment._fieldsProto) {
                        commentData =  comment._fieldsProto;
                    } else {
                        commentData = comment;
                    };

                    return (
                        <div>
                        <Typography gutterBottom variant="h5" component="p">
                            {(commentData.author.stringValue || commentData.author)}
                        </Typography>
                        <Typography component="p">
                            {commentData.body.stringValue || commentData.body}
                        </Typography>
                        <hr />
                        </div>
                    )}
                )}
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
