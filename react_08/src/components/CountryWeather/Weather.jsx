import React, { useState, useEffect, Fragment } from "react";

import {
  getWeatherByCity,
  getWeatherByCityUnits,
} from "./../../services/weatherService";

import SelectUnits from "./SelectUnits";
import WeatherTable from "./WeatherTable";

import Typography from "@mui/material/Typography";

export default function Weather({ country }) {
  const [weather, setWeather] = useState();
  const [units, setUnits] = useState();

  useEffect(() => {
    if (country) {
      (async () => {
        setWeather(await getWeatherByCity(country.capital[0]));
      })();
    }
  }, [country]);

  useEffect(() => {
    if (country) {
      (async () => {
        setWeather(await getWeatherByCityUnits(country.capital[0], units));
      })();
    }
  }, [units]);

  const liftingUnits = (value) => setUnits(value);

  return weather ? (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Weather in {country.capital[0]}, {country.name.common} {country.flag}
      </Typography>
      <SelectUnits liftingUnits={liftingUnits} />
      <WeatherTable weather={weather} />
    </Fragment>
  ) : undefined;
}
