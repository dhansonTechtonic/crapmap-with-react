import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'

import './AddEditStyle.css'
export default class AddPinModal extends Component {
    render() {
        return (
            <div className='vertical-modal'> 
                <div className='modal-row'>
                    <h2>New Pin</h2> 
                    <h2>X</h2>
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
                        <div className='modal-row'>
                            <button>o</button>
                            <button>o</button>
                            <button>o</button>
                        </div>
                        <div className='modal-row'>
                            <input name='tags' placeholder='Tags' className='tag-input'></input> 
                            <button>o</button>
                        </div>
                        <LineDivider />
                        <div className='modal-row'>
                            <button type='submit' className='make-post-button'>POST</button>
                        </div>
                    </form>
            </div>
      )
    }
}
