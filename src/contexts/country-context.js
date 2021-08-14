import * as React from "react";
import { useState } from "react/cjs/react.production.min";

const CountryContext = React.createContext();
CountryContext.displayName = "CountryContext";

function useCountry() {
  const context = React.useContext(CountryContext);
  if (!context) throw new Error("useCountry must be inside <CountryProvider>");
  return context;
}

function CountryProvider({ children }) {
  const [countrySearch, setCountrySearch] = React.useState("");
  const [region, setRegion] = useState("Filter by Region");

  const value = { countrySearch };

  return <CountryContext.Provider>{children}</CountryContext.Provider>;
}

export { useCountry, CountryProvider };
