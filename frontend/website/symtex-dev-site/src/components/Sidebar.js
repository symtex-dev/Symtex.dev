import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export const SIDEBAR_WIDTH = 240;

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function SidebarContent({ active, onScrollTo }) {
  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
      }}
    >
      {/* Logo */}
      <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 6 }}>
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
            flexShrink: 0,
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
          <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.05em' }}>
            Cloud &amp; Automation
          </Typography>
        </Box>
      </Stack>

      {/* Nav links */}
      <Stack spacing={0.25} sx={{ flex: 1 }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <Button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                px: 1.75,
                py: 1.1,
                borderRadius: 2,
                fontSize: '0.875rem',
                color: isActive ? 'text.primary' : 'text.secondary',
                fontWeight: isActive ? 600 : 400,
                bgcolor: isActive ? 'rgba(94, 234, 212, 0.07)' : 'transparent',
                borderLeft: '2px solid',
                borderColor: isActive ? 'primary.main' : 'transparent',
                transition: 'all 160ms ease',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.04)',
                  color: 'text.primary',
                  borderColor: isActive ? 'primary.main' : 'rgba(94, 234, 212, 0.3)',
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>

      {/* Bottom CTA */}
      <Box sx={{ mt: 3 }}>
        <Typography
          variant="caption"
          sx={{ color: 'text.secondary', fontSize: '0.72rem', display: 'block', mb: 1.5 }}
        >
          contact@symtex.dev
        </Typography>
        <Button
          variant="outlined"
          onClick={() => onScrollTo('contact')}
          fullWidth
          size="small"
          sx={{ fontSize: '0.82rem' }}
        >
          Start a conversation
        </Button>
      </Box>
    </Box>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const paperStyles = {
    bgcolor: 'rgba(6, 11, 24, 0.97)',
    borderRight: '1px solid',
    borderColor: 'divider',
    backgroundImage: 'none',
  };

  return (
    <>
      {/* Mobile top bar */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1.5,
            bgcolor: 'rgba(6, 11, 24, 0.95)',
            borderBottom: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(18px)',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: '10px',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(94, 234, 212, 0.12)',
                border: '1px solid rgba(94, 234, 212, 0.22)',
                color: 'primary.main',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}
            >
              S
            </Box>
            <Typography
              variant="h6"
              sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em' }}
            >
              Symtex
            </Typography>
          </Stack>
          <IconButton onClick={() => setMobileOpen(true)} sx={{ color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Desktop fixed sidebar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: SIDEBAR_WIDTH,
          zIndex: 1200,
          ...paperStyles,
        }}
      >
        <SidebarContent active={active} onScrollTo={scrollTo} />
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            ...paperStyles,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <SidebarContent active={active} onScrollTo={scrollTo} />
      </Drawer>
    </>
  );
}
