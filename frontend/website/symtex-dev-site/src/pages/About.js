import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Card,
  CardContent,
} from '@mui/material';

const principles = [
  {
    title: 'Simple beats impressive',
    body: 'The system has to make sense after the kickoff energy wears off. We prefer decisions that are easier to operate, explain, and extend.',
  },
  {
    title: 'Context matters more than dogma',
    body: 'We use strong patterns, but not rigid ones. The right answer depends on your team, your timeline, and the constraints already on the ground.',
  },
  {
    title: 'Ownership is part of delivery',
    body: 'A project is not done because something shipped. It is done when the people inheriting it understand how it works and can move it forward.',
  },
  {
    title: 'Straight answers, even when they are inconvenient',
    body: 'If a plan is too ambitious, too risky, or simply not the best use of budget, we will say so. That honesty tends to save everyone time.',
  },
];

export default function About() {
  return (
    <Box>
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 10 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: { xs: 2, md: 0 }, color: 'text.primary' }}
              >
                The kind of team we try to be.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, mb: 3 }}>
                Symtex started from a pattern we kept seeing: capable teams slowed down by infrastructure debt, brittle delivery workflows, and technical decisions that had quietly outgrown the business.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                We stay deliberately small. That keeps the work sharp, the communication direct, and the delivery model closer to a senior partner embedded with your team than a large agency handing work across layers.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: '0.03em', fontSize: '0.8rem', mb: 6 }}
          >
            HOW WE APPROACH THE WORK
          </Typography>

          <Grid container spacing={{ xs: 6, md: 8 }}>
over-engineered systems and always ask: does this need to be this complicated? Usually the answer is no.`,
our job. We document, we pair, we make sure the knowledge transfers.`,
upfront rather than bluff our way through it. That's saved us — and our clients — a lot of headaches.`,
we built actually solved the problem it was supposed to. That sounds obvious, but you'd be surprised.`,
            {principles.map((item, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3.25 }}>
                    <Typography variant="h5" sx={{ color: 'text.primary', mb: 1.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 2.5, color: 'text.primary' }}>
                What working with us usually feels like.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>Direct communication</Typography>
                  <Typography variant="body1">You are talking to the people doing the work. That reduces noise, shortens decision loops, and tends to surface tradeoffs earlier.</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>Pragmatic technical judgment</Typography>
                  <Typography variant="body1">We care about good architecture, but we care just as much about delivery pressure, maintenance cost, and what your team can realistically support.</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>A bias toward clarity</Typography>
                  <Typography variant="body1">Clear recommendations, clear implementation, and clear handoff. Projects run better when everyone can see the shape of the decision being made.</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 520 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: 'text.primary', mb: 2 }}>
              Want to work together?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We're always interested in hearing about new projects, especially if they 
              involve interesting technical challenges.
            </Typography>
            <Button variant="contained" component={RouterLink} to="/contact" size="large">
              Say hello
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
