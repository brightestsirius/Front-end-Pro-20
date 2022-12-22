import React, {useContext} from 'react'
import {USER_ALL, USER_MARRIED, USER_MARRIED_NON} from './../../constants/user'

import UsersContext from '../../context/UsersContext'

export default function Filter() {
  const {filterMarried, setFilterMarried} = useContext(UsersContext);

  const handleSelect = e => setFilterMarried(e.target.value);

  return (
    <label>
        Select married
        <select onChange={handleSelect} defaultValue={filterMarried}>
            <option value={USER_ALL}>{USER_ALL}</option>
            <option value={USER_MARRIED}>{USER_MARRIED}</option>
            <option value={USER_MARRIED_NON}>{USER_MARRIED_NON}</option>
        </select>
    </label>
  )
}