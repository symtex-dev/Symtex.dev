import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import theme from './theme';
import './App.css';

function ComingSoonOverlay() {
  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="Under construction"
      className="coming-soon-overlay"
    >
      <Box className="coming-soon-panel">
        <Box className="construction-logo" aria-hidden="true">
          <ConstructionIcon fontSize="inherit" />
        </Box>
        <Box className="coming-soon-kicker">SYMTEX DIGITAL</Box>
        <Box component="h1" className="coming-soon-title">Under Construction</Box>
        <Box className="coming-soon-copy">Coming Q4 2026</Box>
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
