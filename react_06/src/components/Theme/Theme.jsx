import React from "react";
import {THEME_DARK, THEME_LIGHT} from './../../constants/theme'

export default function Theme({ theme, setTheme }) {
  const handleChange = (e) => setTheme(e.target.checked ? THEME_LIGHT : THEME_DARK);

  return (
    <label>
      Set theme:{" "}
      <input
        type="checkbox"
        defaultChecked={theme === THEME_LIGHT}
        onChange={handleChange}
      />
    </label>
  );
}
