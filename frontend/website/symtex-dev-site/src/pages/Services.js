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
  Stack,
  Chip,
} from '@mui/material';
import { East } from '@mui/icons-material';

const services = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    lead: 'Your infrastructure should be boring — in the best way possible.',
    body: `We design and manage cloud environments across AWS, Azure, and GCP. Whether that's a greenfield setup, 
migrating off a legacy stack, or optimising what you've already got — we'll get it into a state where you 
can stop worrying about it.`,
    includes: [
      'Cloud architecture design & review',
      'Migration planning & execution',
      'Terraform / IaC implementation',
      'Cost optimisation & right-sizing',
      'Multi-cloud & hybrid setups',
      'Disaster recovery & high availability',
    ],
    tools: 'AWS · Azure · GCP · Terraform · Pulumi · CloudFormation',
    outcomes: ['Cleaner environment structure', 'Lower operational risk', 'Better cost visibility'],
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    lead: 'Ship faster without breaking things. That\'s the whole idea.',
    body: `We set up the pipelines, monitoring, and automation that let your developers focus on writing code 
instead of fighting deployments. From containerisation to GitOps — we'll build the workflow, then teach 
your team how to own it.`,
    includes: [
      'CI/CD pipeline design & setup',
      'Docker & Kubernetes',
      'Monitoring, logging & alerting',
      'Infrastructure as Code',
      'GitOps workflows',
      'Security scanning & compliance',
    ],
    tools: 'Docker · Kubernetes · GitHub Actions · ArgoCD · Prometheus · Grafana',
    outcomes: ['More reliable releases', 'Shorter feedback loops', 'Clearer operational ownership'],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    lead: 'Modern web apps — not the kind that need a 30-page manual.',
    body: `We build frontends, backends, and APIs using tools we actually like working with. React 
for the UIs, Node or Python on the backend, PostgreSQL when we need a database that won't surprise us. 
Clean, tested, and documented code that your team can take over without a headache.`,
    includes: [
      'React / Next.js frontends',
      'Node.js & Python backends',
      'REST & GraphQL APIs',
      'Database design & management',
      'Authentication & authorisation',
      'Performance tuning',
    ],
    tools: 'React · Next.js · Node.js · Python · TypeScript · PostgreSQL',
    outcomes: ['Better frontend architecture', 'Stronger delivery foundations', 'Faster feature iteration'],
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    lead: 'Sometimes you just need someone to look at the whole picture.',
    body: `Not every engagement means writing code. Sometimes teams need an outside perspective on their 
architecture, a second opinion on a migration plan, or help figuring out why deployments keep 
going sideways. We do that too.`,
    includes: [
      'Architecture reviews',
      'Cloud readiness assessments',
      'DevOps maturity audits',
      'Tech stack recommendations',
      'Team workshops & training',
      'Process & workflow improvement',
    ],
    tools: 'Whatever tools you\'re working with — we\'ll meet you where you are.',
    outcomes: ['Clearer decision-making', 'Better sequencing', 'Less expensive rework'],
  },
];

export default function Services() {
  return (
    <Box>
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, color: 'text.primary' }}
            >
              Services built around delivery, not theater.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
              We usually work with teams that already know the stakes. They need sharper systems, steadier releases, or experienced help getting a product into a shape they can trust.
            </Typography>
            <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap" sx={{ mt: 3.5 }}>
              {services.map((service) => (
                <Chip
                  key={service.id}
                  label={service.title}
                  component="a"
                  href={`#${service.id}`}
                  clickable
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.04)',
                    color: 'text.secondary',
                    border: '1px solid rgba(148, 163, 184, 0.12)',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Divider />

      {services.map((service, idx) => (
        <Box key={service.id} id={service.id}>
          <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: idx % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
            <Container maxWidth="lg">
              <Card>
                <CardContent sx={{ p: { xs: 3.25, md: 4 } }}>
                  <Grid container spacing={{ xs: 4, md: 5 }}>
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          fontFamily: 'monospace',
                          fontSize: '0.8rem',
                          mb: 2,
                        }}
                      >
                        0{idx + 1}
                      </Typography>
                      <Typography variant="h3" sx={{ fontSize: { xs: '1.7rem', md: '2.05rem' }, mb: 1.5, color: 'text.primary' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary', mb: 2.5, fontWeight: 500 }}>
                        {service.lead}
                      </Typography>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line', mb: 3 }}>
                        {service.body}
                      </Typography>
                      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                        {service.tools}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                      <Grid container spacing={2.5}>
                        <Grid size={{ xs: 12, lg: 7 }}>
                          <Box
                            sx={{
                              p: 2.5,
                              borderRadius: 4,
                              border: '1px solid rgba(148, 163, 184, 0.14)',
                              bgcolor: 'rgba(255,255,255,0.03)',
                              height: '100%',
                            }}
                          >
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 2.25, fontSize: '0.8rem', letterSpacing: '0.04em' }}>
                              WHAT THIS USUALLY INCLUDES
                            </Typography>
                            {service.includes.map((item, i) => (
                              <Box key={i}>
                                <Box sx={{ py: 1.45, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                  <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.96rem' }}>
                                    {item}
                                  </Typography>
                                  <East sx={{ color: 'text.secondary', fontSize: 14, opacity: 0.5, flexShrink: 0 }} />
                                </Box>
                                {i < service.includes.length - 1 && <Divider />}
                              </Box>
                            ))}
                          </Box>
                        </Grid>
                        <Grid size={{ xs: 12, lg: 5 }}>
                          <Box
                            sx={{
                              p: 2.5,
                              borderRadius: 4,
                              border: '1px solid rgba(94, 234, 212, 0.16)',
                              bgcolor: 'rgba(94, 234, 212, 0.05)',
                              height: '100%',
                            }}
                          >
                            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                              TYPICAL OUTCOMES
                            </Typography>
                            <Stack spacing={1.25}>
                              {service.outcomes.map((item) => (
                                <Box key={item} sx={{ px: 1.4, py: 1.2, borderRadius: 3, bgcolor: 'rgba(15, 23, 42, 0.42)' }}>
                                  <Typography variant="body2" sx={{ color: 'text.primary' }}>{item}</Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Box>
          {idx < services.length - 1 && services[idx + 1] && (idx % 2 === 0) && <Divider />}
        </Box>
      ))}

      <Divider />

      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="end">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: 'text.primary', mb: 2 }}>
                If the scope is fuzzy, that is still a valid place to start.
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 480 }}>
                Drop us the rough shape of the problem and we can help define the next sensible step. That is often where the valuable work begins.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { md: 'right' } }}>
              <Button variant="contained" component={RouterLink} to="/contact" size="large">
                Start a conversation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
