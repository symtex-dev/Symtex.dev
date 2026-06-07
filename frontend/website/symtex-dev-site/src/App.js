import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Sidebar, { SIDEBAR_WIDTH } from './components/Sidebar';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flex: 1, minWidth: 0, ml: { xs: 0, md: `${SIDEBAR_WIDTH}px` } }}
        >
          <MainPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
