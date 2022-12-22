import React, { useState, useEffect } from "react";
import { REGIONS } from "./../services/countryService";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectRegion({ liftingRegion }) {
  const [region, setRegion] = useState(); // undefined

  const handleSelect = (e) => setRegion(e.target.value);

  useEffect(() => {
    // ComponentDidMount => liftingRegion(undefined)
    // ComponenDidUpdate => liftingRegion(Europe)

    liftingRegion(region);

    // ComponentWillUnmount => return () => {}
  }, [region]);

  return (
    <TextField
      select
      label="Choose region"
      defaultValue="Choose region"
      helperText="Please select your region"
      onChange={handleSelect}
    >
      <MenuItem value="Choose region" disabled>Choose region</MenuItem>
      {REGIONS.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
}
