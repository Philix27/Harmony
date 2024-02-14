import { DefaultTheme } from "styled-components";

export const themeLight: DefaultTheme = {
  colors: {
    background: "#F5FBF5",
    backgroundLight: "#F7F7F7",
    backgroundDark: "#D5D3D3",
    accentColor: "#DBE0DD",
    secondary: "#04471c",
    grey: "#dbdbdb",
    button: "hsl(205.1,100%,36.1%)",
    primary: "#29c275",
    success: "#66A15A",
    text1: "#313131",
    text2: "#9EA1A0",
    inverseText1: "#FFFFFF",
    inverseText2: "#DDDDDD",
    danger: "red",
    companyGreen: "#29c275",
    primaryRed: "#ee1919",
    primaryBlue: "#006fff",
    link: "#266dd3",
    primaryOrange: "#bf8c0a",
  },
  fonts: {
    primary: "Anek Malayalam",
  },
  paddings: {
    container: "15px",
    pageTop: "30px",
  },
  margins: {
    pageTop: "30px",
  },
  breakpoints: {
    xs: "screen and (max-width: 400px)",
    sm: "screen and (max-width: 600px)",
    md: "screen and (max-width: 900px)",
    lg: "screen and (max-width: 1280px)",
    xl: "screen and (max-width: 1440px)",
    xxl: "screen and (max-width: 1940px)",
  },
};
