import React, { useState, useEffect } from "react";

import { REGIONS } from "./../../services/countryService";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectRegion({ liftingRegion }) {
  const [region, setRegion] = useState();

  const handleSelect = (e) => setRegion(e.target.value);

  useEffect(() => {
    liftingRegion(region);
  }, [region]);

  return (
    <TextField
      select
      label="Select region"
      helperText="Select region"
      defaultValue=""
      onChange={handleSelect}
    >
      {REGIONS.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
}
