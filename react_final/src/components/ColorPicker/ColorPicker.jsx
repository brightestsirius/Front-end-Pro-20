import React, {useContext} from 'react'

import ThemeContext from '../../context/ThemeContext'

export default function ColorPicker() {
  const {color, setColor} = useContext(ThemeContext);

  const handleColor = e => setColor(e.target.value);

  return (
    <label>
        Select color: <input type="color" defaultValue={color} onChange={handleColor} />
    </label>
  )
}
