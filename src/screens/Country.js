/**@jsxImportSource @emotion/react */

import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Screen } from "../components/Screen";
import { getCountry } from "../utils/country";

import * as colors from "../styles/colors";
import * as mq from "../styles/media-queries";

import { useTheme } from "../contexts/theme-context";
import { borderRadius, boxShadow } from "../styles/globalStyles";

import { BiArrowBack } from "react-icons/bi";
import { Container } from "../components/lib";
import { DetailRow } from "./Home";
import styled from "@emotion/styled";

const StyledLink = styled(Link)(
  {
    display: "inline-block",
    textDecoration: "none",

    borderRadius,
    padding: "1em 2em",
    marginTop: "3.7em",
    boxShadow,
  },
  ({ theme }) => ({
    backgroundColor: theme === "light" ? colors.white : colors.darkModeElements,
    "&, &:hover": {
      color: theme === "light" ? colors.lightModeText : colors.white,
    },
  })
);

function CountryScreen() {
  const { countryCode } = useParams();

  const { theme } = useTheme();

  const {
    status,
    isFetching,
    data: country,
  } = useQuery(["country", countryCode], () => getCountry(countryCode));

  return (
    <Screen>
      {status === "idle" || status === "loading" || isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <StyledLink to="/" theme={theme}>
            <BiArrowBack css={{ marginRight: "1em", fontSize: "1.2em" }} />
            Back
          </StyledLink>
          <div
            css={{
              marginTop: "3.3em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1em",
              flexWrap: "wrap",
              paddingBottom: "3em",
            }}
          >
            <div css={{ flex: "1 0 26em" }}>
              <img
                src={country.flag}
                alt={country.name}
                css={{ maxWidth: "min(calc(100% - 6em), 37em)", boxShadow }}
              />
            </div>
            <div css={{ fontSize: "16px" }}>
              <h1 css={{ fontWeight: 800 }}>{country.name}</h1>
              <div
                css={{
                  marginTop: "1.2em",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.6em",
                  flexWrap: "wrap",
                  [mq.sm]: {
                    flexDirection: "column",
                  },
                }}
              >
                <div>
                  <DetailRow label="Native Name" value={country.nativeName} />
                  <DetailRow
                    label="Population"
                    value={Number(country.population).toLocaleString("en-us")}
                  />
                  <DetailRow label="Region" value={country.region} />
                  <DetailRow label="Sub Region" value={country.subregion} />
                  <DetailRow label="Capital" value={country.capital} />
                </div>
                <div>
                  <DetailRow
                    label="Top Level Domain"
                    value={country.topLevelDomain}
                  />
                  <DetailRow
                    label="Currencies"
                    value={country.currencies
                      .map((currency) => currency.name)
                      .join(", ")}
                  />
                  <DetailRow
                    label="Languages"
                    value={country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  />
                </div>
              </div>
              <div
                css={{
                  marginTop: "2em",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.6em",
                }}
              >
                <div css={{ flex: 1 }}>Border Countries:</div>
                <div css={{ display: "flex", flexWrap: "wrap" }}>
                  {country.borders.map((border) => (
                    <BorderCountryLink
                      to={`/country/${border}`}
                      key={border}
                      theme={theme}
                    >
                      {border}
                    </BorderCountryLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Screen>
  );
}

const BorderCountryLink = styled(StyledLink)({
  padding: "0.6em 2em",
  margin: "0.2em",
  fontWeight: 300,
});

export default CountryScreen;
