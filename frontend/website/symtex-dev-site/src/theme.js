import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E5E7EB',
      light: '#F9FAFB',
      dark: '#A1A1AA',
    },
    secondary: {
      main: '#A1A1AA',
      light: '#D4D4D8',
      dark: '#71717A',
    },
    background: {
      default: '#171717',
      paper: '#212121',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#A3A3A3',
    },
    divider: '#3F3F46',
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: { fontWeight: 600, letterSpacing: '0', lineHeight: 1.04 },
    h2: { fontWeight: 600, letterSpacing: '0', lineHeight: 1.12 },
    h3: { fontWeight: 600, letterSpacing: '0', lineHeight: 1.15 },
    h4: { fontWeight: 600, letterSpacing: '0' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7, color: '#D4D4D8' },
    body2: { lineHeight: 1.6, color: '#A3A3A3' },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0' },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#171717',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          padding: '10px 16px',
          fontSize: '0.875rem',
        },
        contained: {
          backgroundColor: '#E5E5E5',
          color: '#18181B',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#52525B',
          color: '#E4E4E7',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#A1A1AA',
            backgroundColor: 'rgba(255,255,255,0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#212121',
          border: '1px solid #3F3F46',
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#181818',
            borderRadius: 3,
            '& fieldset': { borderColor: '#52525B' },
            '&:hover fieldset': { borderColor: '#A1A1AA' },
            '&.Mui-focused fieldset': { borderColor: '#E5E5E5' },
          },
        },
      },
    },
  },
});

export default theme;
