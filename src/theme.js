import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      light: '#8D33EF',
      main: '#7100EB',
      dark: '#5B00C3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#70BAFF',
      main: '#51ABFF',
      dark: '#2B94F6',
      contrastText: '#000000',
    },
    success: {
      main: '#00834F',
      light: '#F2F9F6',
    },
    error: {
      main: '#D42828',
      light: '#FFEEED',
    },
    warning: {
      main: '#DB7227',
      light: '#FFF4EB',
    },
    info: {
      main: '#026BC8',
      light: '#F2F8FC',
    },
    text: {
      primary: '#27272A',
      secondary: '#71717B',
      disabled: '#9F9FA9',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    divider: 'rgba(113, 113, 123, 0.2)',
  },

  typography: {
    fontFamily: 'Noto Sans',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Roboto',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: 'Noto Sans',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: 'Noto Sans',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: 'Noto Sans',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: 'Roboto Condensed',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontFamily: 'Roboto Condensed',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },

  shape: {
    borderRadius: 4,
  },

  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: 'normal',
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          width: '100%',
          boxSizing: 'border-box',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          width: '100%',
          boxSizing: 'border-box',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '100%',
          boxSizing: 'border-box',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          width: '100%',
          boxSizing: 'border-box',
        },
      },
    },
  },

});

export default theme;
