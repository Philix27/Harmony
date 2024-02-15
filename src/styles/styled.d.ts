// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      background: string;
      backgroundLight: string;
      backgroundDark: string;
      grey: string;
      link: string;
      button: string;
      text1: string;
      text2: string;
      inverseText1: string;
      inverseText2: string;
      success: string;
      danger: string;
      companyGreen: string;
      primaryRed: string;
      primaryBlue: string;
      primaryOrange: string;
    };
    fonts: {
      primary: "Anek Malayalam";
    };
    paddings: {
      container: "15px";
      pageTop: "30px";
    };
    margins: {
      pageTop: "30px";
    };
    breakpoints: {
      xs: "screen and (max-width: 400px)"; // for small screen mobile
      sm: "screen and (max-width: 600px)"; // for mobile screen
      md: "screen and (max-width: 900px)"; // for tablets
      lg: "screen and (max-width: 1280px)"; // for laptops
      xl: "screen and (max-width: 1440px)"; // for desktop / monitors
      xxl: "screen and (max-width: 1940px)"; // for big screens
    };
  }
}
