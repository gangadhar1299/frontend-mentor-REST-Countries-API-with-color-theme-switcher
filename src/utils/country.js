export const getCountries = () =>
  fetch("https://restcountries.eu/rest/v2/regionalbloc/eu").then((res) =>
    res.json()
  );
