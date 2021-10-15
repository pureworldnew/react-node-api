import React, { useState } from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "@fontsource/roboto";
import logo from "./assets/images/logo.svg";
import { SharedComp, ComplexShared } from "./components";
// ROUTER
import Home from "pages/Home";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider, Button, createTheme } from "@mui/material";
// import theme from "styles/muiTheme";
import { Typography } from "@mui/material";
import { ThemeSwitch } from "components/ThemeSwitch";
import { dark, light } from "styles/muiTheme";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";

function App() {
  const [darkState, setDarkState] = useState(true);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };

  return (
    <ProvideAuth>
      <div>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </ProvideAuth>
  );
}

export default App;
