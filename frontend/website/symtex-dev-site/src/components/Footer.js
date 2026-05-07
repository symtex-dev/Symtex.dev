import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Grid, Link, Divider, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 8, pb: 4, mt: 'auto', bgcolor: 'rgba(6, 11, 24, 0.42)' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '12px',
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: 'rgba(94, 234, 212, 0.12)',
                  border: '1px solid rgba(94, 234, 212, 0.22)',
                  color: 'primary.main',
                  fontWeight: 800,
                }}
              >
                S
              </Box>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Symtex
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 320 }}>
              Cloud consulting, DevOps engineering, and product delivery for teams that want stronger systems and fewer avoidable problems.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}>
              Pages
            </Typography>
            {['Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                component={RouterLink}
                to={`/${item.toLowerCase()}`}
                underline="none"
                display="block"
                sx={{ color: 'text.secondary', mb: 1.5, fontSize: '0.875rem', '&:hover': { color: 'text.primary' } }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            {['Cloud & Infra', 'DevOps', 'Web Dev', 'Consulting'].map((item) => (
              <Link
                key={item}
                component={RouterLink}
                to="/services"
                underline="none"
                display="block"
                sx={{ color: 'text.secondary', mb: 1.5, fontSize: '0.875rem', '&:hover': { color: 'text.primary' } }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              contact@symtex.dev
            </Typography>
            <Typography variant="body2">
              Remote, working with teams across product, platform, and operations.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Symtex
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Built with MUI and a bias toward clarity
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
