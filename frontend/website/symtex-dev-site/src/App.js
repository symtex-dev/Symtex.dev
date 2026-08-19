import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Sidebar />
        <Box
          component="main"
          sx={{ minWidth: 0, pt: '72px' }}
        >
          <MainPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
