// theme.ts
import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: '"Rubik", sans-serif',
  primaryColor: "primary",

  colors: {
    primary: [
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
      "#cef24a",
    ],
    secondary: [
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
      "#38355b",
    ],
    tertiary: [
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
      "#7624f3",
    ],
    inputBox: [
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
      "#333053",
    ],
    menuText: [
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
      "#f0fbc7",
    ],
    priceText: [
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
      "#d5bbfb",
    ],
    borderLine: [
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
      "#636087",
    ],
    primaryDisabled: [
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
      "#e8f9ac",
    ],
    secondaryDisabled: [
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
      "#c1c0cc",
    ],
  },

  headings: {
    fontFamily: '"Rubik", sans-serif',
    sizes: {
      h1: {
        fontSize: "1.563rem",
        fontWeight: "800",
        lineHeight: "1.688rem",
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.625rem",
      },
      h3: {
        fontSize: "1.125rem",
        fontWeight: "600",
        lineHeight: "1.25rem",
      },
    },
  },

  radius: {
    sm: "12px",
    md: "16px",
    lg: "19px",
    xl: "50px", // overlay
  },

  other: {
    backgroundColor: "#181626",
    textColor: "white",
    btnBackground: "#282641",
    btnPrimaryActive: "#cef24a",
    btnSecondaryActive: "#ffffff",

    // Typography Utility Tokens
    bodyFontSize: "0.875rem",
    bodyFontWeight: "400",
    bodyLineHeight: "1rem",

    bodyBoldFontWeight: "700",

    subtextFontSize: "0.75rem",
    subtextFontWeight: "400",
    subtextLineHeight: "1rem",

    subtextBoldFontWeight: "700",

    navbarFontSize: "0.625rem",
    navbarFontWeight: "400",
    navbarLineHeight: "1.25rem",

    priceFontSize: "2rem",
    priceFontWeight: "400",
  },
});

export default theme;
