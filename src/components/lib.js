/**@jsxImportSource @emotion/react  */

import styled from "@emotion/styled";
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from "@reach/listbox";
import { useTheme } from "../contexts/theme-context";
import * as colors from "../styles/colors";
import { borderRadius, boxShadow } from "../styles/globalStyles";
import { FaAngleDown } from "react-icons/fa";

export const Container = styled.div({
  maxWidth: "min(1200px, 90%)",
  margin: "auto",
});

const StyledListboxOption = styled(ListboxOption)(
  {
    listStyle: "none",
    cursor: "pointer",
    padding: "1em",
  },
  ({ theme = "light" }) => ({
    color: theme === "light" ? colors.lightModeText : colors.white,
    "&[data-reach-listbox-option][data-current-nav]": {
      backgroundColor: theme === "light" ? "#ededed" : "hsl(207, 26%, 30%)",
    },
  })
);

export const Option = ({ children, ...props }) => {
  const { theme } = useTheme();
  return (
    <StyledListboxOption theme={theme} {...props}>
      {children}
    </StyledListboxOption>
  );
};

const StyledListboxList = styled(ListboxList)({
  boxShadow,
  outline: "none",
  marginTop: "0.3em",
  borderRadius,
  padding: 0,
});

const StyledListboxButton = styled(ListboxButton)(
  {
    padding: "1em",
    width: "12em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ({ theme }) => ({
    color: theme === "light" ? colors.lightModeText : colors.white,
  })
);

const StyledListboxInput = styled(ListboxInput)({});

export function Select({ value, onChange = () => {}, children }) {
  const { theme } = useTheme();
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        backgroundColor:
          theme === "light" ? colors.white : colors.darkModeElements,
        boxShadow,
        borderRadius,
      }}
    >
      <StyledListboxInput value={value} onChange={onChange}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <StyledListboxButton arrow={<FaAngleDown />} theme={theme} />
        </div>
        <ListboxPopover>
          <StyledListboxList
            css={{
              backgroundColor:
                theme === "light" ? colors.white : colors.darkModeElements,
            }}
          >
            {children}
          </StyledListboxList>
        </ListboxPopover>
      </StyledListboxInput>
    </div>
  );
}
