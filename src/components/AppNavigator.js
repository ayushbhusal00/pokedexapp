import React from "react";
import { AppBar, Box, Typography, Switch, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function AppNavigator() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#8561c5",
        main: "#673ab7",
        dark: "#482880",
        contrastText: "#fff",
      },
      secondary: {
        light: "#4aedc4",
        main: "#1de9b6",
        dark: "#14a37f",
        contrastText: "#000",
      },
    },
    custom: {
      linkTitle: {
        color: "white",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={4}>
              <Link to="/">
                <Typography
                  color="primary.contrastText"
                  variant="h6"
                  component="p"
                >
                  Pokedex
                </Typography>
              </Link>
              <Link to="/favourites">
                <Typography
                  color="primary.contrastText"
                  variant="subtitle1"
                  component="h1"
                >
                  Favourites
                </Typography>
              </Link>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Switch color="secondary" />
              <Typography>Light</Typography>
            </Stack>
          </Stack>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
