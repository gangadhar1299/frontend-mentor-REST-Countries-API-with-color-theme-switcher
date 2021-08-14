/**@jsxImportSource @emotion/react */

import * as React from "react";
import { useQuery } from "react-query";
import { Container, Select } from "../components/lib";
import { Screen } from "../components/Screen";
import { getCountries } from "../utils/country";
import * as colors from "../styles/colors";
import { boxShadow } from "../styles/globalStyles";
import { useTheme } from "../contexts/theme-context";
import { SearchBox } from "../components/search-box";

function HomeScreen() {
  return (
    <Screen>
      <SearchFilter />
      <Countries />
    </Screen>
  );
}

function SearchFilter() {
  const [value, setValue] = React.useState();
  return (
    <Container>
      <div
        css={{
          marginTop: "2.67em",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2em 1em"
        }}
      >
        <SearchBox />
        <Select value={value} onChange={console.log} />
      </div>
    </Container>
  );
}

function Countries() {
  const { status, data: countries } = useQuery("countries", getCountries);
  if (status === "loading" || status === "idle") return <h1>loading...</h1>;
  return (
    <Container>
      <div
        css={{
          marginTop: "2.67em",
          display: "flex",
          flexFlow: "row wrap",
          gap: "2em",
          "& > div": { flex: "1 0 16em" },
        }}
      >
        {countries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </Container>
  );
}

function CountryCard({ country }) {
  const { theme } = useTheme();
  const { name, region, population, capital, flag } = country;
  return (
    <div css={{ boxShadow }}>
      <img src={flag} css={{ width: "100%", height: "auto" }} alt={name} />
      {/* <div
        css={{
          flex: 1,
          padding: "1em 1em 2em",
          backgroundColor:
            theme === "light" ? colors.white : colors.darkModeElements,
        }}
      >
        <div>{name}</div>
        <div css={{ marginTop: "1em" }}>
          <div>{region}</div>
          <div>{population}</div>
          <div>{capital}</div>
        </div>
      </div> */}
    </div>
  );
}

export default HomeScreen;
