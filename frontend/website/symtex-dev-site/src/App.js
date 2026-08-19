import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import './App.css';

function ComingSoonOverlay() {
  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="Coming soon"
      className="coming-soon-overlay"
    >
      <Box className="coming-soon-panel">
        <Box className="coming-soon-kicker">SYMTEX DIGITAL</Box>
        <Box component="h1" className="coming-soon-title">Coming Soon</Box>
        <Box className="coming-soon-copy">
          We are refining the new experience. Please check back shortly.
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('scroll-locked');
    document.body.classList.add('scroll-locked');

    return () => {
      document.documentElement.classList.remove('scroll-locked');
      document.body.classList.remove('scroll-locked');
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ComingSoonOverlay />
    </ThemeProvider>
  );
}

export default App;
