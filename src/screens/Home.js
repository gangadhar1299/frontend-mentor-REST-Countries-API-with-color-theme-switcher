/**@jsxImportSource @emotion/react */

import * as React from "react";
import { useQuery } from "react-query";
import { Container, Option, Select } from "../components/lib";
import { Screen } from "../components/Screen";
import { getCountries } from "../utils/country";
import * as colors from "../styles/colors";
import { borderRadius, boxShadow } from "../styles/globalStyles";
import { useTheme } from "../contexts/theme-context";
import { SearchBox } from "../components/search-box";
import { Link } from "react-router-dom";
import * as mq from "../styles/media-queries";

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
          gap: "2em 1em",
        }}
      >
        <SearchBox />
        <Select value={value} onChange={console.log}>
          <Option value="a">A</Option>
          <Option value="b">B</Option>
        </Select>
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
          paddingBottom: "3em",
        }}
      >
        {countries.map((country) => (
          <div key={country.alpha3Code} title={country.name}>
            <Link
              to={`/country/${country.alpha3Code}`}
              css={{ textDecoration: "none" }}
            >
              <CountryCard country={country} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

function CountryCard({ country }) {
  const { theme } = useTheme();
  const { name, region, population, capital, flag } = country;
  return (
    <div
      css={{
        boxShadow,
        color: theme === "light" ? colors.lightModeText : colors.white,
        "&:hover": {
          "& .overlay": {
            opacity: 1,
          },
          "& .flag-image": {
            transform: "scale(1.6)",
          },
        },
      }}
    >
      <div css={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <img
          src={flag}
          alt={name}
          css={{
            height: "10em",
            width: "100%",
            transition: "0.37s ease-in-out",
            [mq.sm]: {
              width: "100%",
              height: "auto",
            },
          }}
          className="flag-image"
        />
        <div
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#00000099" : "#ffffff99",
            opacity: 0,
            transition: "0.16s ease-in",
          }}
          className="overlay"
        >
          <div
            css={{
              color: theme === "light" ? colors.white : colors.darkModeElements,
              padding: "1em",
              borderRadius: borderRadius,
              fontSize: "1.2em",
            }}
          >
            View Details
          </div>
        </div>
      </div>
      <div
        css={{
          flex: 1,
          padding: "1em 1em 2em",
          backgroundColor:
            theme === "light" ? colors.white : colors.darkModeElements,
        }}
      >
        <div css={{ fontSize: "1.1em" }}>{name}</div>
        <div css={{ marginTop: "1em" }}>
          <DetailRow label="Population" value={population} />
          <DetailRow label="Region" value={region} />
          <DetailRow label="Capital" value={capital} />
        </div>
      </div>
    </div>
  );
}

export function DetailRow({ label, value }) {
  return (
    <div css={{ lineHeight: 1.9 }}>
      <span css={{ fontWeight: 600, marginRight: "1em" }}>{label}:</span>
      <span css={{ fontWeight: 300 }}>{value}</span>
    </div>
  );
}

export default HomeScreen;
