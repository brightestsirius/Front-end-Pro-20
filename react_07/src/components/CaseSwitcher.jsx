import React, {useContext} from 'react'

import ThemeContext from '../context/ThemeContext';

import {CASE_CAPITALIZE, CASE_UPPERCASE, CASE_LOWERCASE} from './../constants/theme'

export default function CaseSwitcher() {

  const {textCase, setTextCase} = useContext(ThemeContext);

  const handleSelect = e => setTextCase(e.target.value);

  return (
    <label>
      Select text case:
      <select defaultValue={textCase} onChange={handleSelect}>
        <option value={CASE_CAPITALIZE}>{CASE_CAPITALIZE}</option>
        <option value={CASE_UPPERCASE}>{CASE_UPPERCASE}</option>
        <option value={CASE_LOWERCASE}>{CASE_LOWERCASE}</option>
      </select>
    </label>
  )
}
