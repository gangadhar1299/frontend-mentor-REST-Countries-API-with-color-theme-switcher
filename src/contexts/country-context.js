import * as React from "react";

const CountryContext = React.createContext();
CountryContext.displayName = "CountryContext";

function useCountry() {
  const context = React.useContext(CountryContext);
  if (!context) throw new Error("useCountry must be inside <CountryProvider>");
  return context;
}

function CountryProvider({ children }) {
  const [countrySearch, setCountrySearch] = React.useState("");
  const [region, setRegion] = React.useState(null);

  const value = { countrySearch, setCountrySearch, region, setRegion };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export { useCountry, CountryProvider };
