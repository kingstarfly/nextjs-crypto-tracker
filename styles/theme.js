import React from "react";
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    body: `Inter, Courier, monospace;`,
    heading: `MontSerrat, Courier, monospace`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default theme;
