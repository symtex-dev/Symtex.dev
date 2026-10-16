import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import theme from './theme';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import './App.css';

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
