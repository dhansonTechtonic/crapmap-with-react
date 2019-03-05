import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import optionsObj from './Options'

const DropdownExampleMultipleSelection = (props) => (
    <Dropdown placeholder='Tags' fluid multiple selection options={optionsObj[props.category]} noResultsMessage='Try another search.'/>
)

export default DropdownExampleMultipleSelection