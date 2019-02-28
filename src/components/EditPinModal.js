import React, {Component} from 'react'
import LineDivider from './LineDivider'

import './AddEditStyle.css'
export default class EditPinModal extends Component {
    render() {
        return (
            <div className='vertical-modal'> 
                <div className='modal-row'>
                    <h2>Edit Pin</h2> 
                    <h2>X</h2>
                </div>
                <LineDivider />
                    <form>
                        <div className='modal-row'>
                            <button>o</button>
                            <button>o</button>
                            <button>o</button>
                            <button>o</button>
                            <button>o</button>
                        </div>
                        <div className='modal-row'>
                            <input placeholder='Pin Title'></input>
                        </div>
                        <div className='modal-row'>
                            <input placeholder='Location'></input>
                        </div>
                        <div className='modal-row'>
                            <button>o</button>
                            <button>o</button>
                            <button>o</button>
                        </div>
                        <div className='modal-row'>
                            <input className='tag-input' placeholder='Tags'></input> 
                            <button>o</button>
                        </div>
                        <LineDivider />
                        <div className='modal-row'>
                            <button>o</button>
                            <button className='save-post-button'>SAVE</button>
                        </div>
                    </form>
            </div>
        )
  }
}
