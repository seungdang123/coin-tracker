import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#7f8fa6",
  accentColor: "#e1b12c",
  boxColor: "#2f3640",
  borderColor: "#e1b12c",
  bulbColor: "#7f8fa6",
  tapColor: "#7f8fa6",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#aaa69d",
  textColor: "#000",
  accentColor: "#f7f1e3",
  boxColor: "#84817a",
  borderColor: "#84817a",
  bulbColor: "#f7f1e3",
  tapColor: "#84817a",
};

export const theme = {
  lightTheme,
  darkTheme,
};
