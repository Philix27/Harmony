import { DefaultTheme } from "styled-components";

export const themeDark: DefaultTheme = {
  colors: {
    background: "#032134",
    backgroundLight: "#444444",
    backgroundDark: "#1D1D1D",
    accentColor: "#d2ffe8",
    secondary: "#04471c",
    grey: "#dbdbdb",
    button: "hsl(205.1,100%,36.1%)",
    primary: "#29c275",
    success: "#66A15A",
    text1: "",
    text2: "",
    inverseText1: "#313131",
    inverseText2: "#707070",
    danger: "",
    companyGreen: "#29c275",
    primaryRed: "#ee1919",
    primaryBlue: "#006fff",
    link: "#006fff",
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
