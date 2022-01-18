import React from "react";
import ReactDOM from "react-dom";
// import Styled from "./Styled";
// import Animation from "./Animation";
// import Theme from "./Theme";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmok",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Theme />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
