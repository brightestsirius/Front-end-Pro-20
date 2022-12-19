import React, { useState, useEffect } from "react";

import { BG_COLOR } from "./../constants/theme";

export default function BackgroundSwitcher({liftingBgColor}) {
  const [bgColor, setBgColor] = useState(BG_COLOR);

  const handleChange = (e) => setBgColor(e.target.value);

  useEffect(() => {
    liftingBgColor(bgColor);
  }, [bgColor])

  return (
    <label>
      Set background color:{" "}
      <input type="color" defaultValue={bgColor} onChange={handleChange} />
    </label>
  );
}
