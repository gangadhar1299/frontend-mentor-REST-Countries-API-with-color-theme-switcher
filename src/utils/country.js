export const getCountries = () =>
  fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code"
  ).then((res) => res.json());

export const getCountry = (countryCode) =>
  fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then((res) =>
    res.json()
  );
