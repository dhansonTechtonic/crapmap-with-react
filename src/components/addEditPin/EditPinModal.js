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

    }
    render() {
        return (
            <div className='vertical-modal'> 
                <div className='header'>
                    <h2>Edit Pin</h2> 
                    <ExitButton />
                </div>
                <LineDivider />
                    <form>
                        <h1 className="category-header">{this.state.category}</h1>
                        <div className='modal-row'>
                        <CategoryButtons handleClick={this.handleClick} />
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
