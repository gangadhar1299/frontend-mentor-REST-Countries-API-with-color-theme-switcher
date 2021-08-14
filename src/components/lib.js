/**@jsxImportSource @emotion/react  */

import styled from "@emotion/styled";
import {
  Listbox,
  ListboxArrow,
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
  ({ theme }) => ({
    color: theme === "light" ? colors.lightModeText : colors.white,
  })
);

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
  ({theme}) => ({
    color: theme === "light" ? colors.lightModeText : colors.white,
  })
);

const StyledListboxInput = styled(ListboxInput)({});

export function Select({ value, onChange = () => {} }) {
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
          <StyledListboxButton arrow={FaAngleDown} theme={theme} />
        </div>
        <ListboxPopover>
          <StyledListboxList
            css={{
              backgroundColor:
                theme === "light" ? colors.white : colors.darkModeElements,
            }}
          >
            <StyledListboxOption value={"bojangles"} theme={theme}>
              Bojangles'
            </StyledListboxOption>
            <StyledListboxOption value="churchs" theme={theme}>
              Church's
            </StyledListboxOption>
            <StyledListboxOption value="kfc" theme={theme}>
              KFC
            </StyledListboxOption>
            <StyledListboxOption value="popeyes" theme={theme}>
              Popeyes
            </StyledListboxOption>
          </StyledListboxList>
        </ListboxPopover>
      </StyledListboxInput>
    </div>
  );
}
