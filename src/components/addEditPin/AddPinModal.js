import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import MakePostButton from '../buttons/MakePostButton.js'

import '../App.css'

import PropTypes from 'prop-types'
export default class AddPinModal extends Component {
<<<<<<< HEAD


    // _uploadImg(img){
    //     let formattedImg = this._imgResize(img);

    // }

    _uploadImg(img){
        console.log(img);
        let canvas = document.createElement('canvas');
        let max_width = 600;
        let max_height = 400;
        let width = 600;
        let height = 400;
        let imgElement = document.createElement('img');
        imgElement.src = img;

        // if (width > height) {
        //     if(width > max_width){
        //         height *= max_width / width;
        //         width = max_width;
        //     }
        // }else {
        //     if(height > max_height){
        //         width *= max_height / height;
        //         height = max_height;
        //     }
        // } 

        canvas.width = width;
        canvas.height = height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(imgElement, 0, 0, max_width, max_height);
        console.log(ctx);
        let dataurl = ctx.canvas.toDataURL('image/jpeg', 0.5);
        console.log(dataurl);

        return false;
=======
    constructor(props) {
        super(props);
        this.state = {
            category: 'Pick A Category',
        }
        this.handleClick = this.handleClick.bind(this);

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

>>>>>>> cac1e01fa89bcff1cc64b290e5fd7a0654397716
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
<<<<<<< HEAD
                    <form onSubmit={this.handleSubmit}>
                        <div className='modal-row'>
                            <CategoryButtons />
                        </div>
                        <div className='modal-row'>
                            <input name='title' placeholder='Pin Title'></input>
                        </div>
                        <div className='modal-row'>
                            <input name='location' placeholder='Location'></input>
                        </div>
                        <div>
                            <BoxButtons />
                        </div>
                        <div className='modal-row'>
                            <input name='tags' placeholder='Tags' className='tag-input'></input> 
                            <ImageButton sendData={this._uploadImg} />
                        </div>
                        <LineDivider />
                        <div className='modal-row'>
                            <MakePostButton />
                        </div>
                    </form>
=======
                <form onSubmit={this.handleSubmit}>
                    <h1 className="category-header">{this.state.category}</h1>
                    <div className='modal-row'>
                        <CategoryButtons handleClick={this.handleClick} />
                    </div>
                    <div className='modal-row'>
                        <input name='title' placeholder='Pin Title'></input>
                    </div>
                    <div className='modal-row'>
                        <input name='location' placeholder='Location'></input>
                    </div>
                    <div>
                        <BoxButtons />
                    </div>
                    <div className='modal-row'>
                        <ImageButton />
                    </div>
                    <LineDivider />
                    <div className='modal-row'>
                        <MakePostButton />
                    </div>
                </form>
>>>>>>> cac1e01fa89bcff1cc64b290e5fd7a0654397716
            </div>
        )
    }
}

AddPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};