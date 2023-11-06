"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "./color";

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#E0C2FF",
            light: "#F5EBFF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#47008F",
        },
    },
    typography: {
        fontFamily: ["monospace", "Roboto"].join(","),
        fontSize: 13,
    },
});
