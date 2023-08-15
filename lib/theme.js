import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/unbounded";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts: {
    body: "Unbounded Variable, sans-serif",
    heading: "Unbounded Variable, serif",
    mono: "Unbounded Variable, monospace",
  },
  colors: {
    text: { main: "#E5E8DF", secondary: "#737373" },
    accent: { main: "#8DC22D", yellow: "#E8CB3C", red: "#E10E1A" },
    onyx: "#3B3E41",
    platinum: "#DFDFDF",
  },
  breakpoints: {
    md: "968px",
  },
  components: {
    Heading: {
      variants: {
        secondary: {
          fontWeight: 300,
          fontSize: "32px",
          color: "primary",
        },
        sm: {
          bg: "teal.500",
          fontSize: "lg",
        },
      },
    },
    Button: {
      variants: {
        main: {
          bg: "linear-gradient(79.92deg, #436597 13.77%, #289AEE 85.86%);",
          color: "white",
          fontSize: "sm",
          fontWeight: "500",
          borderRadius: "8px",
          fontSize: "18px",
          width: "200px",
          _hover: {
            bg: "white",
            border: "2px solid #279CF1",
            color: "primary",
          },
        },

        outline: {
          border: "1px solid #737373",
          fontWeight: "500",
          borderRadius: "164x",
        },
        none: {
          display: "none",
        },
      },
    },
    Text: {
      variants: {
        secondary: { color: "text.secondary" },
      },
    },
  },
});
