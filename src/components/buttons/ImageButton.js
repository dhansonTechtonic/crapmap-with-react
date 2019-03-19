import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

export default class ImageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: null
        }
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({
                image
            })
        }
        this.props.sendData(e.target.files[0]);
    }

    render() {
        return (
            <div onClick={this._uploadImage}>
                <input type="file" onChange={this._handleChange} name="postingImg" id="file" class="inputfile" accept="image/*" style={{'padding-top':20}}/>
                <label for="file"></label>
            </div>
        )
    }
}