import React, { useState } from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "@fontsource/roboto";
// import logo from "./assets/images/logo.svg";
import { ComplexShared } from "./components";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider } from "@mui/material";

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
      <ThemeProvider theme={darkState ? dark() : light()}>
        <ThemeSwitch
          darkState={darkState}
          handleThemeChange={handleThemeChange}
        />
        <BrowserRouter>
          <ComplexShared>
            <RouterConfig />
          </ComplexShared>
        </BrowserRouter>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;
