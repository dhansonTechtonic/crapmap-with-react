import React, { Component } from 'react'
import LineDivider from './LineDivider'
export default class AddPinModal extends Component {
  render() {
    return (
        <div className='vertical-modal'> 
            <div className='modalRow'>
                <h2>New Pin</h2> 
                <h2>X</h2>
            </div>
            <LineDivider />
            <div className='modalRow'>
                <button>o</button>
                <button>o</button>
                <button>o</button>
                <button>o</button>
                <button>o</button>
            </div>
            <div className='modalRow'>
                <input placeholder='Pin Title'></input>
            </div>
            <div className='modalRow'>
                <input placeholder='Location'></input>
            </div>
            <div className='modalRow'>
                <button>o</button>
                <button>o</button>
                <button>o</button>
            </div>
            <div className='modalRow'>
                <input placeholder='Tags' className='tagInput'></input> 
                <button>o</button>
            </div>
            <LineDivider />
            <div className='modalRow'>
                <button className='postButton'>POST</button>
            </div>
        </div>
    )
  }
}
