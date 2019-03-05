import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import optionsObj from './Options'

console.log(optionsObj)

const DropdownExampleMultipleSelection = (props) => (
    <Dropdown placeholder='Tags' fluid multiple selection options={optionsObj[props.category]}/>
)

export default DropdownExampleMultipleSelection