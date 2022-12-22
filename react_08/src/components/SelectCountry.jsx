import React, { useEffect, useState } from "react";

import { getCountriesByRegion } from "./../services/countryService";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectCountry({ region, liftingCountry }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    // region = undefined
    if (region) {
      (async () => {
        setCountries(await getCountriesByRegion(region));
      })();
    }
  }, [region]);

  const handleSelect = (e) => setCountry(countries[e.target.value]);

  useEffect(() => {
    liftingCountry(country);
  }, [country]);

  return countries.length ? (
    <TextField
      select
      label="Select country"
      defaultValue="0"
      helperText="Please select your country"
      onChange={handleSelect}
    >
      {countries.map((item, index) => (
        <MenuItem value={index} key={index}>
          {item.flag} {item.name.common}
        </MenuItem>
      ))}
    </TextField>
  ) : undefined;
}
