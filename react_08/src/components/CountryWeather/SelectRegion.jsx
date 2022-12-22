import React, { useState, useEffect } from "react";

import { REGIONS } from "./../../services/countryService";

export default function SelectRegion({ liftingRegion }) {
  const [region, setRegion] = useState();

  const handleSelect = (e) => setRegion(e.target.value);

  useEffect(() => {
    liftingRegion(region);
  }, [region]);

  return (
    <label>
      Select region:{" "}
      <select onChange={handleSelect}>
        {REGIONS.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
