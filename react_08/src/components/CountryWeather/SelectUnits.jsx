import React, { useState, useEffect } from "react";

import {
  UNIT_IMPERIAL,
  UNIT_STANDARD,
  UNIT_METRIC,
} from "./../../constants/weather";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectUnits({ liftingUnits }) {
  const [units, setUnits] = useState();

  const handleChange = (e) => setUnits(e.target.value);

  useEffect(() => {
    liftingUnits(units);
  }, [units]);

  return (
    <TextField
      select
      label="Select units"
      defaultValue={UNIT_STANDARD}
      onChange={handleChange}
    >
      <MenuItem value={UNIT_STANDARD}>{UNIT_STANDARD}</MenuItem>
      <MenuItem value={UNIT_IMPERIAL}>{UNIT_IMPERIAL}</MenuItem>
      <MenuItem value={UNIT_METRIC}>{UNIT_METRIC}</MenuItem>
    </TextField>
  );
}
