import React, { Component } from 'react'
import './App.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
            <nav className="search-bar drop-shadow">
                <ul className="main-search-list" id="search-menu">
                    <li> <input className="home-page-search-input" type="text" name="searchBar" size="300" placeholder="SEARCH"/></li>
                </ul>
            </nav>
      </div>
    )
  }
}
