import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import MakePostButton from '../buttons/MakePostButton.js'

import '../App.css'
export default class AddPinModal extends Component {


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
    }

    render() {
        return (
            <div className='vertical-modal'> 
                <div className='header'>
                    <h2>New Pin</h2> 
                    <ExitButton />
                </div>
                <LineDivider />
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
            </div>
      )
    }
}
