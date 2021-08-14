export const getCountries = () =>
  fetch("https://restcountries.eu/rest/v2/regionalbloc/eu").then((res) =>
    res.json()
  );

export const getCountry = (countryCode) =>
  fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then((res) =>
    res.json()
  );
