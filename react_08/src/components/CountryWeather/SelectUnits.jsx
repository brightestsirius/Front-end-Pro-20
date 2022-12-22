import React, { useState, useEffect } from "react";

import {
  UNIT_IMPERIAL,
  UNIT_STANDARD,
  UNIT_METRIC,
} from "./../../constants/weather";

export default function SelectUnits({ liftingUnits }) {
  const [units, setUnits] = useState();

  const handleChange = (e) => setUnits(e.target.value);

  useEffect(() => {
    liftingUnits(units);
  }, [units]);

  return (
    <label>
      Select units:
      <select onChange={handleChange}>
        <option value={UNIT_STANDARD}>{UNIT_STANDARD}</option>
        <option value={UNIT_IMPERIAL}>{UNIT_IMPERIAL}</option>
        <option value={UNIT_METRIC}>{UNIT_METRIC}</option>
      </select>
    </label>
  );
}
