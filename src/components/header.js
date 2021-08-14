/**@jsxImportSource @emotion/react */
import { Container } from "./lib";
import * as colors from "../styles/colors";
import { BiSun } from "react-icons/bi";
import { HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../contexts/theme-context";
import { boxShadow } from "../styles/globalStyles";

function Title() {
  const { theme } = useTheme();
  return (
    <span
      css={{
        fontSize: "1.6rem",
        fontWeight: "600",
        color: theme === "light" ? colors.darkModeElements : colors.white,
      }}
    >
      Where in the world?
    </span>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      css={{
        height: "4.3em",
        backgroundColor:
          theme === "light"
            ? colors.lightModeBackground
            : colors.darkModeElements,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        boxShadow: boxShadow,
      }}
    >
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Title />
        <button
          css={{
            color: theme === "light" ? colors.darkModeElements : colors.white,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          onClick={toggleTheme}
        >
          <span css={{ marginRight: ".3em", lineHeight: 1 }}>
            {theme === "light" ? <HiOutlineMoon /> : <BiSun />}
          </span>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </Container>
    </header>
  );
}

export { Header };
