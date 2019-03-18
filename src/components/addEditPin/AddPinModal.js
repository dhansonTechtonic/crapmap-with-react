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
                            <ImageButton />
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

AddPinModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};