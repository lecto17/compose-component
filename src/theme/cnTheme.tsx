// border, font-size, font-weight 등에 대한 정의가 필요함
import { DefaultTheme } from "styled-components";
// 서비스 별로의 테마를 작성
const primary = {
  /* blue */
  blue0: "#3670D2",
  blue1: "#EEF5FF",
  blue2: "#D3E5FF",
  blue3: "#8DBBFE",
  blue4: "#60A1FF",
  blue5: "#3670D2",
  blue6: "#2D5AA5",
  blue7: "#254B8A",
  blue8: "#1C3C72",
  blue9: "#152E52",
  blue10: "#0D1E38",
};

const secondary = {
  /* background-color */
  bg1: "#F5F6F8",
  bg2: "#EAECF1",
  bg3: "#D7DAE2",
  bg4: "#C8CCD5",
  bg5: "#A4ABBB",
  bg6: "#8391AC",
  bg7: "#61708B",
  bg8: "#48566E",
  bg9: "#333F55",
  bg10: "#222A37",
  black: "#242424",
  secondaryBlack: "$424242",
  white: "#fff",
};

const alert = {
  /* alert-color */
  or: "#FF6600",
  gr: "#69CA00",
  cr: "#FF2840",
};

const fontSize = {
  xxl: "32px",
  xl: "24px",
  lg: "20px",
  md: "16px",
  sm: "14px",
  xs: "12px",
  xxs: "11px",
};

const fontWeight = {
  bold: "700",
  medium: "500",
  regular: "400",
};
/*
const cnTheme = {
  primary: {
    // blue
    blue0: "#3670D2",
    blue1: "#EEF5FF",
    blue2: "#D3E5FF",
    blue3: "#8DBBFE",
    blue4: "#60A1FF",
    blue5: "#3670D2",
    blue6: "#2D5AA5",
    blue7: "#254B8A",
    blue8: "#1C3C72",
    blue9: "#152E52",
    blue10: "#0D1E38",
  },
  secondary: {
    // background-color
    bg1: "#F5F6F8",
    bg2: "#EAECF1",
    bg3: "#D7DAE2",
    bg4: "#C8CCD5",
    bg5: "#A4ABBB",
    bg6: "#8391AC",
    bg7: "#61708B",
    bg8: "#48566E",
    bg9: "#333F55",
    bg10: "#222A37",
    black: "#242424",
    secondaryBlack: "$424242",
    white: "#fff",
  },
  alert: {
    // alert-color
    or: "#FF6600",
    gr: "#69CA00",
    cr: "#FF2840",
  },
  fontSize: {
    xxl: "32px",
    xl: "24px",
    lg: "20px",
    md: "16px",
    sm: "14px",
    xs: "12px",
    xxs: "11px",
  },
  fontWeight: {
    bold: "700",
    medium: "500",
    regular: "400",
  },
};
*/
export type PrimaryTypes = typeof primary;
export type SecondaryTypes = typeof secondary;
export type AlertTypes = typeof alert;
export type FontSizeTypes = typeof fontSize;
export type FontWeight = typeof fontWeight;

const cnTheme: DefaultTheme = {
  primary,
  secondary,
  alert,
  fontSize,
  fontWeight,
};

export default cnTheme;
