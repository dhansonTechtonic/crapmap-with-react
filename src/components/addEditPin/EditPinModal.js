import React, {Component} from 'react'
import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import TrashCanButton from '../buttons/TrashCanButton.js'
import SavePostButton from '../buttons/SavePostButton.js'

import '../App.css'
export default class EditPinModal extends Component {
    render() {
        return (
            <div className='vertical-modal'> 
                <div className='header'>
                    <h2>Edit Pin</h2> 
                    <ExitButton />
                </div>
                <LineDivider />
                    <form>
                        <div className='modal-row'>
                            <CategoryButtons />
                        </div>
                        <div className='modal-row'>
                            <input placeholder='Pin Title'></input>
                        </div>
                        <div className='modal-row'>
                            <input placeholder='Location'></input>
                        </div>
                        <div className='boxes'>
                            <BoxButtons />
                        </div>
                        <div className='modal-row'>
                            <ImageButton />
                        </div>
                        <LineDivider />
                        <div className='footer'>
                            <TrashCanButton />
                            <SavePostButton />
                        </div>
                    </form>
            </div>
        )
  }
}
