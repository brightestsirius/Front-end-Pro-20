import React, {useContext} from "react";

import ThemeContext from "../context/ThemeContext";

export default function ColorSwitcher() {
  const handleChange = (e) => setTextColor(e.target.value);

  const {textColor, setTextColor} = useContext(ThemeContext);

  return (
    <label>
      Set text color:{" "}
      <input type="color" defaultValue={textColor} onChange={handleChange} />
    </label>
  );
}
