import React, { Component } from 'react'

import LineDivider from './LineDivider'
import CategoryButtons from '../buttons/CategoryButtons'
import ExitButton from '../buttons/ExitButton.js'
import BoxButtons from '../buttons/BoxButtons.js'
import ImageButton from '../buttons/ImageButton.js'
import MakePostButton from '../buttons/MakePostButton.js'

import '../App.css'
export default class AddPinModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            category:'Pick A Category',
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
                        <h1 className="category-header">{this.state.category}</h1>
                        <div className='modal-row'>
                        <CategoryButtons handleClick={this.handleClick}/>
                        </div>
                        <div className='modal-row'>
                            <input name='title' placeholder='Pin Title'></input>
                        </div>
                        <div className='modal-row'>
                            <input name='location' placeholder='Location'></input>
                        </div>
                        <div className='modal-row'>
                            <input name='description' placeholder='Description' type="textarea" maxLength="100"></input>
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
            </div>
      )
    }
}
