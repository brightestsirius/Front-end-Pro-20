import React from "react";
import { useEffect, useState } from "react";

import { getCountriesByRegion } from "./../../services/countryService";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function SelectCountry({ region, liftingCountry }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    if (region) {
      (async () => {
        setCountries(await getCountriesByRegion(region));
      })();
    }
  }, [region]);

  useEffect(() => {
    liftingCountry(country);
  }, [country]);

  const handleSelect = (e) => setCountry(countries[e.target.value]);

  return countries.length ? (
    <TextField
      select
      label="Select country"
      helperText="Select country"
      onChange={handleSelect}
      defaultValue=""
    >
      {countries.map((item, index) => (
        <MenuItem key={index} value={index}>
          {item.flag} {item.name.common}
        </MenuItem>
      ))}
    </TextField>
  ) : undefined;
}