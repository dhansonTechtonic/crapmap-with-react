import React, { Component } from 'react'
import './App.css'


export default class SettingsModal extends Component {
    render() {
    return (
        <div className="vertical-modal">
            <div className="body-flex">
                <div className="title-exit-button-container">
                    <div className="title-exit-button-flex-group">
                        <h1> Settings </h1>
                        
                    </div>
                </div>
                <div className="settings-container">
                    
                        <hr/>
                        
                        <hr/>
                    
                </div>
                <footer className="footer-flex">
                    
                </footer>
            </div>
        </div>
    )
  }
}
