import React, { useState, useEffect } from "react";

import {
  UNITS_IMPERIAL,
  UNITS_METRIC,
  UNITS_STANDARD,
} from "./../constants/weather";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectUnits({ liftingUnits }) {
  const [units, setUnits] = useState(
    localStorage.getItem(`units`)
      ? localStorage.getItem(`units`)
      : UNITS_STANDARD
  );
  const [handleChange, setHandleChange] = useState(false);

  const handleSelect = (e) => {
    setUnits(e.target.value);
    setHandleChange(true);
  };

  useEffect(() => {
    if (handleChange) {
      localStorage.setItem(`units`, units);
      liftingUnits(units);
    }
  }, [units]);

  return (
    <TextField
      select
      label="Select units"
      value={units}
      helperText="Please select your units"
      onChange={handleSelect}
    >
      <MenuItem value={UNITS_STANDARD}>{UNITS_STANDARD}</MenuItem>
      <MenuItem value={UNITS_IMPERIAL}>{UNITS_IMPERIAL}</MenuItem>
      <MenuItem value={UNITS_METRIC}>{UNITS_METRIC}</MenuItem>
    </TextField>
  );
}
