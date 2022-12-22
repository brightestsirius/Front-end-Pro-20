import React from "react";
import { useEffect, useState } from "react";

import { getCountriesByRegion } from "./../../services/countryService";

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
    <label>
      Select country:{" "}
      <select onChange={handleSelect}>
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.flag} {item.name.common}
          </option>
        ))}
      </select>
    </label>
  ) : undefined;
}
