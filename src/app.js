import React, { Component } from 'react'
import './components/App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faBaseballBall)
library.add(faCar)
library.add(faCouch)
library.add(faTv)
library.add(faQuestionCircle)
library.add(faTrash)
library.add(faBox)
library.add(faTimes)
library.add(faCamera)
library.add(faPlusCircle)
library.add(faBars)
library.add(faPencilAlt)
library.add(faSearch)

export default class App extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}
