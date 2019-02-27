import React, { Component } from 'react'
import LineDivider from './LineDivider'
export default class AddPinModal extends Component {
  render() {
    return (
        <div className='vertical-modal'> 
            <div className='modal-row'>
                <h2>New Pin</h2> 
                <h2>X</h2>
            </div>
            <LineDivider />
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
                <input placeholder='Tags' className='tag-input'></input> 
                <button>o</button>
            </div>
            <LineDivider />
            <div className='modal-row'>
                <button className='post-button'>POST</button>
            </div>
        </div>
    )
  }
}
