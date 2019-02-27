import React, {Component} from 'react'

export default class EditPinModal extends Component {
  render() {
    return (
      <div className='vertical-modal'> 
            <div className='modalRow'>
                <h2>Edit Pin</h2> 
                <h2>X</h2>
            </div>
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
                <input placeholder='Tags'></input> 
                <button>o</button>
            </div>
            <div className='modalRow'>
                <button>o</button>
                <button>o</button>
            </div>
        </div>
    )
  }
}
