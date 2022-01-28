import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#fff",
  accentColor: "#8c7ae6",
  boxColor: "rgba(0, 0, 0, 0.5);",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#e2d7ee",
  textColor: "#000",
  accentColor: "#009741",
  boxColor: "whitesmoke",
};

export const theme = {
  lightTheme,
  darkTheme,
};
