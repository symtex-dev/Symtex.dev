import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ArrowOutward, Send } from '@mui/icons-material';

const services = [
  ['01', 'Cloud foundations', 'Landing zones, infrastructure as code, security controls, and cost-aware platforms that teams can operate.'],
  ['02', 'Delivery systems', 'Practical CI/CD, GitOps, and release workflows that give engineering teams a steady cadence.'],
  ['03', 'Product engineering', 'Well-structured web applications and APIs built with a clear path to ongoing ownership.'],
  ['04', 'Technical direction', 'Architecture reviews, migration plans, and candid advice when consequential decisions are on the table.'],
];

const capabilityGroups = [
  ['Infrastructure', 'Terraform', 'Terragrunt', 'Azure', 'AWS'],
  ['Delivery', 'GitHub Actions', 'ArgoCD', 'Docker', 'Kubernetes'],
  ['Application', 'React', 'Node.js', 'Python', 'PostgreSQL'],
];

const steps = [
  ['Assess', 'Map the existing system, constraints, and the point of greatest leverage.'],
  ['Design', 'Turn the findings into a focused plan with explicit trade-offs.'],
  ['Deliver', 'Implement with your team, document decisions, and leave the system in a stronger state.'],
];

const caseStudies = [
  ['01', 'Platform reset', 'A growing SaaS team', 'Cloud architecture, Terraform, cost controls', 'We replaced an increasingly fragile setup with a predictable platform baseline, giving the team safer releases and a clearer operating model.'],
  ['02', 'Release control', 'A digital product studio', 'CI/CD, GitHub Actions, release governance', 'A practical delivery workflow reduced manual handoffs and made each release visible, repeatable, and easier to recover.'],
  ['03', 'Product launch', 'An early-stage technology company', 'React, Node.js, API design, deployment', 'We moved from a promising prototype to a maintainable product foundation without overbuilding the first version.'],
];

const testimonials = [
  ['Engineering lead, SaaS company', 'Symtex gave us a platform we could explain to the whole team. The work was focused, pragmatic, and immediately useful.'],
  ['Founder, technology company', 'The biggest difference was clarity. We knew what to fix first, why it mattered, and what good looked like when we were done.'],
  ['Delivery director, product studio', 'They joined the problem at the right level: hands-on enough to make progress, experienced enough to avoid creating another layer of complexity.'],
];

function Eyebrow({ children }) {
  return <Typography sx={{ color: 'text.secondary', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', letterSpacing: '0.08em', mb: 2 }}>{children}</Typography>;
}

function SystemDiagram() {
  const nodes = ['PLAN', 'BUILD', 'RELEASE', 'OPERATE'];
  return (
    <Box sx={{ border: '1px solid #52525B', bgcolor: '#1C1C1C', p: { xs: 2.5, md: 3.5 }, minHeight: { md: 410 }, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.72rem', color: 'text.secondary' }}>DELIVERY SYSTEM / 01</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#D4D4D8', fontSize: '0.7rem', fontFamily: '"IBM Plex Mono", monospace' }}><Box sx={{ width: 6, height: 6, bgcolor: '#E5E5E5' }} /> ACTIVE</Box>
      </Stack>
      <Stack spacing={1.5} sx={{ flex: 1, justifyContent: 'center', py: 3 }}>
        {nodes.map((node, index) => (
          <React.Fragment key={node}>
            <Box sx={{ border: '1px solid', borderColor: index === 2 ? '#A1A1AA' : '#3F3F46', p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: index === 2 ? '#27272A' : 'transparent' }}>
              <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.8rem', color: index === 2 ? 'text.primary' : 'text.secondary' }}>{node}</Typography>
              <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem', color: 'text.secondary' }}>0{index + 1}</Typography>
            </Box>
            {index < nodes.length - 1 && <Box sx={{ height: 12, borderLeft: '1px solid #52525B', ml: 2 }} />}
          </React.Fragment>
        ))}
      </Stack>
      <Typography variant="body2" sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2 }}>Systems are designed to make the next release ordinary.</Typography>
    </Box>
  );
}

export default function MainPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box>
      <Box id="hero" sx={{ minHeight: { md: '100vh' }, display: 'flex', alignItems: 'center', py: { xs: 12, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 9 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Eyebrow>SYMTEX / CLOUD ENGINEERING & DELIVERY</Eyebrow>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', sm: '3.65rem', md: '4.8rem' }, maxWidth: 780, mb: 3 }}>Build the systems your team can rely on.</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 590, mb: 4.5 }}>Symtex partners with growing engineering teams to improve cloud foundations, make delivery dependable, and turn technical complexity into an advantage.</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="contained" endIcon={<ArrowOutward />} onClick={() => scrollTo('contact')}>Discuss your project</Button>
                <Button variant="outlined" onClick={() => scrollTo('services')}>View capabilities</Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}><SystemDiagram /></Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ borderTop: '1px solid', borderColor: 'divider', py: { xs: 8, md: 12 }, bgcolor: '#1C1C1C' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 9 }}>
            <Grid size={{ xs: 12, md: 4 }}><Eyebrow>CAPABILITIES</Eyebrow><Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>Useful work, close to the metal.</Typography></Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                {services.map(([number, title, body]) => <Box key={number} sx={{ py: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'grid', gridTemplateColumns: { xs: '44px 1fr', sm: '70px minmax(170px, 0.7fr) 1.3fr' }, gap: { xs: 1.5, sm: 3 } }}><Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', color: 'text.secondary', fontSize: '0.72rem', pt: 0.4 }}>{number}</Typography><Typography variant="h6" sx={{ fontSize: '1rem' }}>{title}</Typography><Typography variant="body2" sx={{ gridColumn: { xs: '2', sm: 'auto' } }}>{body}</Typography></Box>)}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="work" sx={{ borderTop: '1px solid', borderColor: 'divider', py: { xs: 8, md: 12 }, bgcolor: '#212121' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 9 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Eyebrow>CASE STUDIES</Eyebrow>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2.5 }}>Work that leaves a system stronger.</Typography>
              <Typography variant="body1">A selection of the problems we help teams solve, from first principles through to a dependable handover.</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={0} sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                {caseStudies.map(([number, title, client, scope, body]) => (
                  <Box key={number} sx={{ py: 3.25, borderBottom: '1px solid', borderColor: 'divider', display: 'grid', gridTemplateColumns: { xs: '42px 1fr', sm: '58px 1fr' }, gap: 2 }}>
                    <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', color: 'text.secondary', fontSize: '0.72rem' }}>{number}</Typography>
                    <Box>
                      <Typography variant="h6" sx={{ mb: 0.75 }}>{title}</Typography>
                      <Typography sx={{ color: 'text.primary', fontSize: '0.82rem', mb: 1 }}>{client}</Typography>
                      <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', color: 'text.secondary', fontSize: '0.7rem', mb: 1.5 }}>{scope}</Typography>
                      <Typography variant="body2">{body}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: { xs: 8, md: 10 } }}>
            <Eyebrow>CLIENT PERSPECTIVES</Eyebrow>
            <Grid container spacing={2}>
              {testimonials.map(([role, quote]) => (
                <Grid size={{ xs: 12, md: 4 }} key={role}>
                  <Box sx={{ height: '100%', border: '1px solid', borderColor: 'divider', p: { xs: 2.5, md: 3 }, bgcolor: '#1C1C1C', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'text.primary', fontSize: '1.7rem', lineHeight: 1, mb: 2 }}>&ldquo;</Typography>
                    <Typography variant="body2" sx={{ flex: 1, mb: 3 }}>{quote}</Typography>
                    <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', color: 'text.secondary', fontSize: '0.68rem' }}>{role}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box id="technologies" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Eyebrow>TOOLS WITH A PURPOSE</Eyebrow>
          <Grid container spacing={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
            {capabilityGroups.map(([group, ...tools], index) => <Grid size={{ xs: 12, md: 4 }} key={group} sx={{ borderRight: { md: index < 2 ? '1px solid #3F3F46' : 'none' }, borderBottom: { xs: index < 2 ? '1px solid #3F3F46' : 'none', md: 'none' }, p: { xs: 3, md: 4 } }}><Typography variant="h6" sx={{ mb: 3 }}>{group}</Typography><Stack spacing={1.25}>{tools.map((tool) => <Typography key={tool} sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.82rem', color: 'text.secondary' }}>{tool}</Typography>)}</Stack></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Box id="about" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 9 }}>
            <Grid size={{ xs: 12, md: 4 }}><Eyebrow>HOW WE WORK</Eyebrow><Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2.5 }}>Clarity is a delivery practice.</Typography><Typography variant="body1">We keep the work senior, direct, and proportionate to the problem. No theatrical process, no distant handover.</Typography></Grid>
            <Grid size={{ xs: 12, md: 8 }}>{steps.map(([title, body], index) => <Box key={title} sx={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 2, py: 3.25, borderTop: '1px solid', borderColor: 'divider' }}><Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', color: 'text.secondary', fontSize: '0.72rem' }}>0{index + 1}</Typography><Box><Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography><Typography variant="body2">{body}</Typography></Box></Box>)}</Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#212121', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 9 }}>
            <Grid size={{ xs: 12, md: 5 }}><Eyebrow>START A CONVERSATION</Eyebrow><Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2.5 }}>Bring the problem into focus.</Typography><Typography variant="body1" sx={{ mb: 4 }}>Tell us where the friction is. A clear next step is usually more useful than a long discovery process.</Typography><Chip label="contact@symtex.dev" variant="outlined" sx={{ borderColor: '#52525B', color: 'text.secondary', borderRadius: 1 }} /></Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
                <Grid container spacing={2}><Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth required name="name" label="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></Grid><Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth required type="email" name="email" label="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Grid></Grid>
                <TextField fullWidth required multiline rows={5} name="message" label="What would you like to improve?" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
                <Box><Button type="submit" variant="contained" endIcon={<Send sx={{ fontSize: '16px !important' }} />}>Send enquiry</Button></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 3, borderTop: '1px solid', borderColor: 'divider', bgcolor: '#171717' }}><Container maxWidth="lg"><Typography variant="body2" sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.7rem' }}>© {new Date().getFullYear()} Symtex Development LTD. All rights reserved.</Typography></Container></Box>
      <Snackbar open={submitted} autoHideDuration={5000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}><Alert severity="success" onClose={() => setSubmitted(false)}>Enquiry received. We will be in touch shortly.</Alert></Snackbar>
    </Box>
  );
}
