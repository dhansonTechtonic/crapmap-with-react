import React, { Component } from 'react'
import '../App.css'
import SliderComponent from '../SliderComponent'
import DeleteAccountButton from '../buttons/DeleteAccountButton'
import ExitButton from '../buttons/ExitButton'


export default class SettingsModal extends Component {
    render() {
    return (
        <div className="vertical-modal">
            <div className="body-flex">
                <div className="header">
                    <h2> Settings </h2>
                    <ExitButton />
                </div>
                <div className="settings-container">
                        <hr/>
                <label>Search Radius: </label>
                <SliderComponent />
                <label>Notifications:</label>
                <input type="checkbox"></input>
                        <hr/>
                </div>
                <footer>
                    <DeleteAccountButton />
                </footer>
            </div>
        </div>
    )
  }
}
