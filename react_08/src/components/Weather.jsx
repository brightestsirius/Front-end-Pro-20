import React, { useEffect, useState, Fragment } from "react";

import {
  getWeatherByCity,
  getWeatherByCityUnits,
} from "./../services/weatherService";

import WeatherTable from "./WeatherTable";
import SelectUnits from "./SelectUnits";

import Typography from '@mui/material/Typography';

export default function Weather({ country }) {
  const [weather, setWeather] = useState();
  const [units, setUnits] = useState();

  useEffect(() => {
    if (country) {
      (async () => {
        setWeather(
          await getWeatherByCity(
            country.capital && country.capital.length
              ? country.capital[0]
              : country.name.common
          )
        );
      })();
    }
  }, [country]);

  useEffect(() => {
    if (units) {
      (async () => {
        setWeather(
          await getWeatherByCityUnits(
            country.capital && country.capital.length
              ? country.capital[0]
              : country.name.common,
            units
          )
        );
      })();
    }
  }, [units]);

  const liftingUnits = (value) => setUnits(value);

  return weather ? (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Weather in{" "}
        {country.capital && country.capital.length
          ? country.capital[0]
          : country.name.common}
        , {country.name.common} {country.flag}
      </Typography>
      <SelectUnits liftingUnits={liftingUnits} />
      <WeatherTable weather={weather} />
    </Fragment>
  ) : undefined;
}
