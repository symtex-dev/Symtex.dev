import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  Stack,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const navItems = [
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 12 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: elevated ? 'rgba(11, 16, 32, 0.86)' : 'rgba(11, 16, 32, 0.72)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: 'background-color 180ms ease, box-shadow 180ms ease',
          boxShadow: elevated ? '0 10px 30px rgba(2, 6, 23, 0.18)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 } }}>
            <Stack
              component={RouterLink}
              to="/"
              direction="row"
              spacing={1.25}
              sx={{ alignItems: 'center', textDecoration: 'none' }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '12px',
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: 'rgba(94, 234, 212, 0.12)',
                  border: '1px solid rgba(94, 234, 212, 0.22)',
                  color: 'primary.main',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                S
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    fontSize: '1.05rem',
                    lineHeight: 1,
                  }}
                >
                  Symtex
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.06em' }}>
                  Cloud and delivery engineering
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'text.primary' : 'text.secondary',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    fontSize: '0.875rem',
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    bgcolor: location.pathname === item.path ? 'rgba(255,255,255,0.06)' : 'transparent',
                    '&:hover': { color: 'text.primary', bgcolor: 'rgba(255,255,255,0.04)' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                component={RouterLink}
                to="/contact"
                size="small"
                sx={{ ml: 1.5, fontSize: '0.82rem', py: 0.9, px: 2.2 }}
              >
                Start a conversation
              </Button>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            bgcolor: '#0B1020',
            backgroundImage: 'none',
            minHeight: '100vh',
          },
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '1.15rem' }}>
              Symtex
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.primary' }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List sx={{ pt: 4 }}>
            {[{ label: 'Home', path: '/' }, ...navItems].map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  sx={{ py: 2 }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      variant: 'h5',
                      color: location.pathname === item.path ? 'text.primary' : 'text.secondary',
                      fontWeight: 600,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Container>
      </Drawer>

      <Toolbar />
    </>
  );
}
