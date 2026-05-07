import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5EEAD4',
      light: '#99F6E4',
      dark: '#14B8A6',
    },
    secondary: {
      main: '#F59E0B',
      light: '#FCD34D',
      dark: '#D97706',
    },
    background: {
      default: '#0B1020',
      paper: '#12192C',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148, 163, 184, 0.18)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 },
    h2: { fontWeight: 750, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h3: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 },
    h4: { fontWeight: 650, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75, color: '#CBD5E1' },
    body2: { lineHeight: 1.65, color: '#94A3B8' },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0' },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(circle at top left, rgba(94, 234, 212, 0.08), transparent 28%), radial-gradient(circle at top right, rgba(245, 158, 11, 0.08), transparent 24%), linear-gradient(180deg, #0B1020 0%, #0F172A 52%, #0B1020 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '11px 20px',
          fontSize: '0.94rem',
        },
        contained: {
          backgroundColor: '#F8FAFC',
          color: '#0B1020',
          boxShadow: '0 14px 34px rgba(15, 23, 42, 0.22)',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 18px 40px rgba(15, 23, 42, 0.28)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(148, 163, 184, 0.25)',
          color: '#E2E8F0',
          backgroundColor: 'rgba(15, 23, 42, 0.28)',
          '&:hover': {
            borderColor: 'rgba(94, 234, 212, 0.5)',
            backgroundColor: 'rgba(94, 234, 212, 0.06)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(18, 25, 44, 0.78)',
          border: '1px solid rgba(148, 163, 184, 0.14)',
          borderRadius: 24,
          backdropFilter: 'blur(14px)',
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
            backgroundColor: 'rgba(15, 23, 42, 0.48)',
            borderRadius: 18,
            '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.16)' },
            '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.28)' },
            '&.Mui-focused fieldset': { borderColor: '#5EEAD4' },
          },
        },
      },
    },
  },
});

export default theme;
