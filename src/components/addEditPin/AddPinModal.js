import React, { Component } from 'react'
import firebase from './../../firebase.js'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import MakePostButton from '../buttons/MakePostButton.js'

import store from '../../redux/store/index';
import {newPin} from '../../redux/actions/pinActions';

import '../App.css'

import PropTypes from 'prop-types'

export default class AddPinModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'Pick A Category',
            dataURL: '',
            imgName: null

        }
        this.handleClick = this.handleClick.bind(this);
    }

    _handleImg(img){
        this.setState({
            dataURL: img,
        })
    }

     _uploadImg(){
        if(this.state.dataURL){
            let storage = firebase.storage();
            storage.ref(`pinsImages/${new Date().getTime()}`).put(this.state.dataURL).then((snapshot) =>
            console.log(snapshot));
        }else{
            return false
        }
        return false
     }

    handleClick(e) {
        switch (e.target.value) {
            case "car":
                this.setState({ category: 'Auto-Parts' }, () => { console.log(this.state.category) });
                break;
            case "baseball-ball":
                this.setState({ category: "Sporting" }, () => { console.log(this.state.category) });
                break;
            case "tv":
                this.setState({ category: "Electronics" }, () => { console.log(this.state.category) });
                break;
            case "question-circle":
                this.setState({ category: "Misc" }, () => { console.log(this.state.category) });
                break;
            default:
                this.setState({ category: "Furniture" }, () => { console.log(this.state.category) });
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    
    handleLocationChange = (e) =>{
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let pin = {
            "title": this.state.title,
            // "description": this.state.description
            "lat": this.state.location,
            "lng": this.state.location,
            "zip": this.state.location,
            "category": this.state.category,
            "img": this.state.dataURL,
            "size": '2',
            "userID": 'testID'
        }

        store.dispatch(newPin(pin));

    }

    render() {

        if (!this.props.show) {
            return null;
        }

        return (
            <div className='vertical-modal'>
                <div className='header'>
                    <h2>New Pin</h2>
                    <ExitButton />
                </div>
                <LineDivider />
                <form onSubmit={this.handleSubmit}>
                    <h1 className="category-header">{this.state.category}</h1>
                    <div className='modal-row'>
                        <CategoryButtons handleClick={this.handleClick} />
                    </div>
                    <div className='modal-row'>
                        <input name='title' placeholder='Pin Title' onChange={this.handleTitleChange}></input>
                    </div>
                    <div className='modal-row'>
                        <input name='location' placeholder='Location' onChange={this.handleLocationChange}></input>
                    </div>
                    <div>
                        <BoxButtons />
                    </div>
                    <div className='modal-row'>
                        <ImageButton sendData={this._handleImg.bind(this)} />
                    </div>
                    <LineDivider />
                    <div className='modal-row'>
                        <button onClick={this.handleSubmit}>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

AddPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};