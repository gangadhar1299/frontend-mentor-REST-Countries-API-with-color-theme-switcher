/**@jsxImportSource @emotion/react */

import * as colors from "../styles/colors";

import { FaSearch } from "react-icons/fa";
import { useTheme } from "../contexts/theme-context";
import { boxShadow } from "../styles/globalStyles";

function SearchBox({ textProps, ...props }) {
  const { theme } = useTheme();
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        boxShadow,
        width: "30em",
        padding: "0 2em",
        borderRadius: "0.2em",
        backgroundColor:
          theme === "light" ? colors.white : colors.darkModeElements,
      }}
      {...props}
    >
      <FaSearch
        css={{
          color: theme === "light" ? colors.lightModeInput : colors.white,
          fontSize: "1.6rem",
          marginRight: "0.7em",
        }}
      />
      <input
        type="search"
        placeholder="Search for a country"
        css={{
          flex: 1,
          color: theme === "light" ? colors.lightModeInput : colors.white,
          border: "none",
          outline: "none",
          height: "100%",
          padding: "1em 0",
          backgroundColor: "transparent",
          "&::placeholder": {
            color: theme === "light" ? colors.lightModeInput : colors.white,
          },
        }}
      />
    </div>
  );
}

export { SearchBox };
