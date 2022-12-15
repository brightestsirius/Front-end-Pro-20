import React from 'react'
import {FILTER_ALL, FILTER_COMPLETED, FILTER_NON_COMPLETED} from './../../constants/filter';

export default function Filter({filter, setFilter}) {

  const handleChange = e => setFilter(e.target.value);

  return (
    <select onChange={handleChange} defaultValue={filter}>
        <option value={FILTER_ALL}>All</option>
        <option value={FILTER_COMPLETED}>Completed</option>
        <option value={FILTER_NON_COMPLETED}>Non-Completed</option>
    </select>
  )
}
