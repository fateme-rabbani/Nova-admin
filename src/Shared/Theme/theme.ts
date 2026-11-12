const palette = {
  primary950: "#0c1523",
  primary900: "#111d30",
  primary800: "#172740",
  primary700: "#243957",
  primary600: "#395171",
  primary100: "#d1d1df",
  primary50: "#f0f0fa",
  primary25: "#fbfbfd",

  info700: "#315a86",
  info500: "#49a2c5",
  info50: "#edf3f9",

  positive700: "#35684d",
  positive500: "#548769",
  positive50: "#edf5ef",

  negative700: "#934a50",
  negative500: "#b7656c",
  negative50: "#faeff0",

  secondary500: "#fe6a20",

  white: "#ffffff",
};
export const lightTheme = {
  colors: {
    ...palette,
    background: palette.primary50,
    contentBackground: palette.primary25,
    text: palette.primary800,
    border: palette.primary50,
  },
};

export const darkTheme = {
  colors: {
    ...palette,
    background: palette.primary950,
    contentBackground: palette.primary700,
    text: palette.primary25,
    border: palette.primary700,
  },
};
