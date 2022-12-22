import React, { useState } from "react";
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import Weather from "./Weather";

import Box from "@mui/material/Box";

export default function index() {
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  const liftingRegion = (value) => setRegion(value);

  const liftingCountry = (value) => setCountry(value);

  return (
    <Box sx={{width: "30ch", m: "2ch auto", '& .MuiTextField-root': { my: 1, width: 'inherit' },}}>
      <SelectRegion liftingRegion={liftingRegion} />
      <SelectCountry region={region} liftingCountry={liftingCountry} />
      <Weather country={country} />
    </Box>
  );
}
