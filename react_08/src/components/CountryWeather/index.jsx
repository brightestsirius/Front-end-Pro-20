import React, { useState } from "react";
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import Weather from "./Weather";

export default function index() {
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  const liftingRegion = (value) => setRegion(value);

  const liftingCountry = (value) => setCountry(value);

  return (
    <div>
      <SelectRegion liftingRegion={liftingRegion} />
      <SelectCountry region={region} liftingCountry={liftingCountry} />
      <Weather country={country} />
    </div>
  );
}
