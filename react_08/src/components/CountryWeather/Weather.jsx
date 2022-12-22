import React, { useState, useEffect } from "react";

import { getWeatherByCity, getWeatherByCityUnits } from "./../../services/weatherService";

import SelectUnits from "./SelectUnits";

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
    <div>
      <h3>
        Weather in {country.capital[0]}, {country.name.common} {country.flag}
      </h3>
      <SelectUnits liftingUnits={liftingUnits} />
      <table>
        <tbody>
          {Object.keys(weather.main).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{weather.main[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : undefined;
}
