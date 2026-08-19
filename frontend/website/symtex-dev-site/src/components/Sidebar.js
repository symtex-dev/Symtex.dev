import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';

const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'services', label: 'Capabilities' },
  { id: 'work', label: 'Case studies' },
  { id: 'technologies', label: 'Stack' },
  { id: 'about', label: 'Approach' },
];

function BrandMark() {
  return (
    <Stack direction="row" alignItems="center" spacing={1.1} sx={{ whiteSpace: 'nowrap' }}>
      <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: { xs: '0.76rem', sm: '0.86rem' }, fontWeight: 500, color: 'text.primary', letterSpacing: '0.04em' }}>SYMTEX</Typography>
      <Box aria-label="X logo placeholder" sx={{ width: 26, height: 26, display: 'grid', placeItems: 'center', bgcolor: '#E5E5E5', color: '#18181B', fontFamily: '"IBM Plex Mono", monospace', fontSize: '1rem', fontWeight: 500, lineHeight: 1 }}>X</Box>
      <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: { xs: '0.76rem', sm: '0.86rem' }, fontWeight: 500, color: 'text.primary', letterSpacing: '0.04em' }}>DIGITAL</Typography>
    </Stack>
  );
}

function Navigation({ active, onNavigate, vertical = false }) {
  return (
    <Stack direction={vertical ? 'column' : 'row'} spacing={vertical ? 0.5 : 0} alignItems={vertical ? 'stretch' : 'center'}>
      {navItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          sx={{
            justifyContent: vertical ? 'flex-start' : 'center',
            minWidth: 0,
            px: vertical ? 1.25 : 1.1,
            py: vertical ? 1 : 0.75,
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.69rem',
            fontWeight: 400,
            color: active === item.id ? 'text.primary' : 'text.secondary',
            bgcolor: active === item.id ? 'rgba(255,255,255,0.08)' : 'transparent',
            borderRadius: 0,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', color: 'text.primary' },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) {
        visible.sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        setActive(visible[0].target.id);
      }
    }, { rootMargin: '-20% 0px -70% 0px' });

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      <Box component="header" sx={{ height: 72, position: 'fixed', inset: '0 0 auto', zIndex: 1200, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'rgba(23,23,23,0.95)', backdropFilter: 'blur(14px)' }}>
        <Box sx={{ height: '100%', maxWidth: 1440, mx: 'auto', px: { xs: 2, md: 4 }, display: 'grid', gridTemplateColumns: { xs: '1fr auto 1fr', md: '1fr auto 1fr' }, alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}><Navigation active={active} onNavigate={navigate} /></Box>
          <Box sx={{ justifySelf: 'center' }}><BrandMark /></Box>
          <Box sx={{ justifySelf: 'end' }}>
            {isMobile ? <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)} sx={{ color: 'text.primary' }}><MenuIcon /></IconButton> : <Button variant="outlined" size="small" onClick={() => navigate('contact')} sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem' }}>Start a project</Button>}
          </Box>
        </Box>
      </Box>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { width: 280, bgcolor: '#1C1C1C', backgroundImage: 'none', borderLeft: '1px solid #3F3F46' } }}>
        <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}><BrandMark /><IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)} sx={{ color: 'text.secondary' }}><CloseIcon /></IconButton></Box>
          <Navigation active={active} onNavigate={navigate} vertical />
          <Box sx={{ mt: 'auto', pt: 3 }}><Button variant="contained" fullWidth onClick={() => navigate('contact')}>Start a project</Button></Box>
        </Box>
      </Drawer>
    </>
  );
}
