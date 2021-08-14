import * as mq from "./media-queries";

const globalStyles = {
  "*": {
    fontWeight: 600,
  },
  html: {
    [mq.sm]: {
      fontSize: "calc(12 * 100vw / 360)",
    },
  },
  body: {
    fontFamily: `'Nunito Sans', sans-serif`,
  },
  button: {
    background: "none",
    border: "none",
  },
};

export const boxShadow = "0 1px 6px 0px rgba(0,0,0,0.30)";

export const borderRadius = "0.2em";

export { globalStyles };
