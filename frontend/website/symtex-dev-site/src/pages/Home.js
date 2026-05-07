import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import { East, NorthEast, Bolt, CloudQueue, Code, Hub } from '@mui/icons-material';

const work = [
  {
    num: '01',
    title: 'Cloud foundations',
    desc: 'Landing zones, environments, Terraform, security baselines, and the operational guardrails teams usually wish they added earlier.',
    link: '/services',
  },
  {
    num: '02',
    title: 'Delivery pipelines',
    desc: 'CI/CD, release workflows, observability, and deployment paths that reduce friction instead of adding another fragile layer.',
    link: '/services',
  },
  {
    num: '03',
    title: 'Product engineering',
    desc: 'Full-stack web apps with solid frontend architecture, dependable APIs, and infrastructure that supports the product instead of fighting it.',
    link: '/services',
  },
  {
    num: '04',
    title: 'Technical advisory',
    desc: 'Architecture reviews, migration planning, and second opinions when the cost of getting it wrong is high.',
    link: '/services',
  },
];

const situations = [
  'Your team is moving fast, but release confidence is low.',
  'Cloud spend is climbing and nobody can explain why.',
  'Infrastructure decisions were made quickly and now need cleaning up.',
  'You need experienced hands for a delivery push, not a bloated agency team.',
];

const process = [
  {
    title: 'Understand the real constraint',
    body: 'We start with the bottleneck, not a prewritten playbook. Sometimes that means code. Sometimes it means process. Usually it means both.',
  },
  {
    title: 'Design the smallest useful system',
    body: 'We prefer the architecture your team can actually run six months from now, not the one that looks impressive in a proposal deck.',
  },
  {
    title: 'Build with ownership in mind',
    body: 'Documentation, pairing, and pragmatic handoff are part of the job. The outcome should still work when we are no longer in the room.',
  },
];

export default function Home() {
  return (
    <Box>
      <Box sx={{ pt: { xs: 10, md: 16 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ maxWidth: 760 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'primary.main', fontWeight: 600, mb: 2.5, letterSpacing: '0.08em', fontSize: '0.78rem' }}
                >
                  CONSULTING · CLOUD · DEVOPS · WEB DELIVERY
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                    mb: 3,
                    color: 'text.primary',
                    maxWidth: 760,
                  }}
                >
                  Infrastructure and product delivery that feels calm, clear, and under control.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, maxWidth: 620, mb: 4.5 }}
                >
                  Symtex helps growing teams improve cloud foundations, streamline delivery, and build web products with fewer surprises. We focus on reliable systems, clean implementation, and sensible technical decisions.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                  <Button variant="contained" component={RouterLink} to="/contact" size="large">
                    Start a conversation
                  </Button>
                  <Button variant="outlined" component={RouterLink} to="/services" size="large">
                    Explore services
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
                  {['AWS', 'Azure', 'Terraform', 'Kubernetes', 'React', 'Delivery strategy'].map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.04)',
                        color: 'text.secondary',
                        border: '1px solid rgba(148, 163, 184, 0.12)',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'rgba(148, 163, 184, 0.35)' }} />
                  </Stack>
                  <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                    Common engagement shape
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'text.primary', mt: 1, mb: 2.5 }}>
                    Better systems without adding unnecessary complexity.
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      { icon: <CloudQueue fontSize="small" />, label: 'Platform and cloud review' },
                      { icon: <Hub fontSize="small" />, label: 'Delivery workflow redesign' },
                      { icon: <Code fontSize="small" />, label: 'Implementation and handoff' },
                      { icon: <Bolt fontSize="small" />, label: 'Operational hardening' },
                    ].map((item) => (
                      <Box
                        key={item.label}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          px: 1.5,
                          py: 1.3,
                          borderRadius: 3,
                          bgcolor: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(148, 163, 184, 0.1)',
                          transition: 'transform 180ms ease, border-color 180ms ease',
                          '&:hover': {
                            transform: 'translateX(4px)',
                            borderColor: 'rgba(94, 234, 212, 0.28)',
                          },
                        }}
                      >
                        <Box sx={{ color: 'primary.main', display: 'grid', placeItems: 'center' }}>{item.icon}</Box>
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>{item.label}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2, color: 'text.primary' }}>
                Where teams usually bring us in.
              </Typography>
              <Typography variant="body1">
                Not for everything. Usually for the moments where scale, delivery speed, and operational clarity start colliding.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              {work.map((item, i) => (
                <Box key={item.num}>
                  <Box
                    component={RouterLink}
                    to={item.link}
                    sx={{
                      display: 'flex',
                      gap: { xs: 2, md: 4 },
                      py: 4,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                      '&:hover': { opacity: 0.88, transform: 'translateX(6px)' },
                      '&:hover .arrow': { transform: 'translateX(4px)' },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.8rem', pt: 0.5, flexShrink: 0 }}
                    >
                      {item.num}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ color: 'text.primary', mb: 1, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ maxWidth: 460 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                    <East
                      className="arrow"
                      sx={{ color: 'text.secondary', fontSize: 18, mt: 0.5, transition: 'transform 0.2s', flexShrink: 0 }}
                    />
                  </Box>
                  {i < work.length - 1 && <Divider />}
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 10 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2.5, color: 'text.primary' }}>
                A practical delivery partner, not just another vendor.
              </Typography>
              <Typography variant="body1">We keep projects grounded in outcomes, but we still care a lot about craft. That combination matters.</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2.5}>
                {process.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={item.title}>
                    <Card>
                      <CardContent sx={{ p: 3.25 }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '16px',
                              display: 'grid',
                              placeItems: 'center',
                              bgcolor: 'rgba(94, 234, 212, 0.1)',
                              color: 'primary.main',
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            0{index + 1}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>{item.title}</Typography>
                            <Typography variant="body2">{item.body}</Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2, color: 'text.primary' }}>
                Signals that it might be time to call us.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={1.5}>
                {situations.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      py: 1.5,
                      borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
                    }}
                  >
                    <NorthEast sx={{ color: 'secondary.main', fontSize: 18 }} />
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Card>
            <CardContent sx={{ p: { xs: 3.5, md: 5 } }}>
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1.5, color: 'text.primary' }}>
                    If the work matters, the implementation details matter too.
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 620 }}>
                    We are happy to talk through a project, pressure-test an approach, or help untangle a platform decision before it becomes expensive.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { md: 'right' } }}>
                  <Button variant="contained" component={RouterLink} to="/contact" size="large">
                    Get in touch
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
