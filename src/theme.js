import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark' ? {
    grey: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414"
    },
    primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509"
    },
    greenAccent: {
      100: "#d9faec",
      200: "#99efcb",
      300: "#66e8b0",
      400: "#33e096",
      500: "#00d87c",
      600: "#00ad63",
      700: "#00824a",
      800: "#005632",
      900: "#002b19"
    },
    redAccent: {
      100: "#dfcece",
      200: "#bf9c9d",
      300: "#a06b6b",
      400: "#80393a",
      500: "#600809",
      600: "#4d0607",
      700: "#3a0505",
      800: "#260304",
      900: "#130202"
    },
    pinkAccent: {
      100: "#fcd2d9",
      200: "#faa5b3",
      300: "#f7798e",
      400: "#EF3B2C",
      500: "#f21f42",
      600: "#c21935",
      700: "#911328",
      800: "#610c1a",
      900: "#30060d"
    },
    blueLight: {
      100: "#dee2ff",
      200: "#bcc5ff",
      300: "#9ba7ff",
      400: "#798aff",
      500: "#586dff",
      600: "#4657cc",
      700: "#354199",
      800: "#232c66",
      900: "#121633"
    },
    blueAccent: {
      100: "#d1d3fe",
      200: "#a3a8fd",
      300: "#767cfd",
      400: "#4851fc",
      500: "#1a25fb",
      600: "#151ec9",
      700: "#101697",
      800: "#0a0f64",
      900: "#050732"
    },
    indigo: {
      100: "#d5dade",
      200: "#acb6bc",
      300: "#82919b",
      400: "#596d79",
      500: "#2f4858",
      600: "#263a46",
      700: "#1c2b35",
      800: "#131d23",
      900: "#090e12"
    },
  }
  : {
    grey: {
      100: "#14141480",
      200: "#13131360",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
    },
    primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#eeeeee", 
      500: "#a1a4ab",
      600: "#e0e0e0",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5",
    },
    greenAccent: {
      100: "#002b19",
      200: "#005632",
      300: "#00ad63",
      400: "#09bc8a",
      500: "#09bc8a",
      600: "#38a3a5",
      700: "#57cc99",
      800: "#80ed99",
      900: "#ccf7e5",
    },
    redAccent: {
      100: "#130202",
      200: "#260304",
      300: "#3a0505",
      400: "#4d0607",
      500: "#600809",
      600: "#80393a",
      700: "#a06b6b",
      800: "#bf9c9d",
      900: "#dfcece",
    },
    pinkAccent: {
      100: "#30060d",
      200: "#610c1a",
      300: "#911328",
      400: "#FC9272",
      500: "#f21f42",
      600: "#f54c68",
      700: "#f7798e",
      800: "#faa5b3",
      900: "#fcd2d9",
    },
    blueLight: {
      100: "#121633",
      200: "#232c66",
      300: "#354199",
      400: "#4657cc",
      500: "#586dff",
      600: "#798aff",
      700: "#9ba7ff",
      800: "#bcc5ff",
      900: "#dee2ff",
    },
    blueAccent: {
      100: "#a3a8fd",
      200: "#0a0f64",
      300: "#101697",
      400: "#151ec9",
      500: "#151ec990",
      600: "#d1d3fe",
      700: "#006FCB",
      800: "#a3a8fd",
      900: "#d1d3fe",
    },
    indigo: {
      100: "#090e12",
      200: "#131d23",
      300: "#1c2b35",
      400: "#263a46",
      500: "#2f4858",
      600: "#596d79",
      700: "#82919b",
      800: "#acb6bc",
      900: "#d5dade",
    }
  })
})

//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#f7fff7",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

const mediaQuery = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
