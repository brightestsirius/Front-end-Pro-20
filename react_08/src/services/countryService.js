export const REGIONS = [`Africa`, `Americas`, `Asia`, `Europe`, `Oceania`];

const API = `https://restcountries.com/v3.1`;

export const getCountriesByRegion = (region) =>
  fetch(API + `/region/${region}`).then((data) => data.json());
