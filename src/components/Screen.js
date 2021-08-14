/**@jsxImportSource @emotion/react */

import { Header } from "./header";
import * as colors from "../styles/colors";
import { useTheme } from "../contexts/theme-context";

function Screen({ children }) {
  const { theme } = useTheme();
  return (
    <div css={{ minHeight: "100vh", display: "flex", flexFlow: "column" }}>
      <Header />
      <div
        css={{
          backgroundColor:
            theme === "light"
              ? colors.lightModeBackground
              : colors.darkModeBackground,
          flex: "1",
          paddingTop: "4.3em",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export { Screen };
