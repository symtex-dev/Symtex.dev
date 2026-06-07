import React, { useState } from 'react';
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
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  CloudQueue,
  Code,
  Hub,
  Bolt,
  Send,
  InsertPhotoOutlined,
  Storage,
  AutoAwesome,
  Terminal,
  BarChart,
  DeveloperBoard,
} from '@mui/icons-material';

// ─── Image Placeholder ───────────────────────────────────────────────────────

function ImagePlaceholder({ height = 260, label = 'Place your image here' }) {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        border: '2px dashed',
        borderColor: 'rgba(148, 163, 184, 0.15)',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        bgcolor: 'rgba(255,255,255,0.015)',
        color: 'text.secondary',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          borderColor: 'rgba(94, 234, 212, 0.22)',
          bgcolor: 'rgba(94, 234, 212, 0.02)',
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '1px dashed',
          borderColor: 'rgba(148, 163, 184, 0.2)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <InsertPhotoOutlined sx={{ fontSize: 22, opacity: 0.4 }} />
      </Box>
      <Typography variant="caption" sx={{ opacity: 0.45, fontSize: '0.75rem' }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <CloudQueue />,
    title: 'Cloud & Infrastructure',
    desc: 'Landing zones, Terraform, security baselines, cost optimisation, and environments your team can actually maintain.',
    tags: ['AWS', 'Azure', 'Terraform', 'Pulumi'],
  },
  {
    icon: <Hub />,
    title: 'DevOps & CI/CD',
    desc: 'Pipelines, GitOps, container orchestration, and the monitoring that makes on-call bearable.',
    tags: ['GitHub Actions', 'Kubernetes', 'ArgoCD', 'Prometheus'],
  },
  {
    icon: <Code />,
    title: 'Web Development',
    desc: 'Frontend, backend, and API work using tools we trust — React, Node.js, Python, PostgreSQL.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <Bolt />,
    title: 'Consulting & Strategy',
    desc: 'Architecture reviews, migration planning, and second opinions when the cost of getting it wrong is high.',
    tags: ['Reviews', 'Workshops', 'Roadmapping'],
  },
];

const technologies = [
  {
    category: 'Infrastructure as Code',
    icon: <Storage sx={{ fontSize: 20 }} />,
    tools: ['Terraform', 'Terragrunt', 'Pulumi', 'CloudFormation'],
    desc: 'Version-controlled infrastructure with no manual clicking, no configuration drift.',
  },
  {
    category: 'CI/CD & Automation',
    icon: <AutoAwesome sx={{ fontSize: 20 }} />,
    tools: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Jenkins'],
    desc: 'Every commit, every test, every deployment — fully automated and auditable.',
  },
  {
    category: 'Containers & Orchestration',
    icon: <DeveloperBoard sx={{ fontSize: 20 }} />,
    tools: ['Docker', 'Kubernetes', 'Helm', 'Kustomize'],
    desc: 'Workloads that scale cleanly, deploy reliably, and recover without manual intervention.',
  },
  {
    category: 'Configuration & Provisioning',
    icon: <Terminal sx={{ fontSize: 20 }} />,
    tools: ['Ansible', 'Python', 'Bash', 'PowerShell'],
    desc: 'Scripting and provisioning that eliminates repetitive operational toil.',
  },
  {
    category: 'Cloud Platforms',
    icon: <CloudQueue sx={{ fontSize: 20 }} />,
    tools: ['AWS', 'Azure', 'GCP', 'Multi-cloud'],
    desc: 'Platform-agnostic automation patterns that work across the major cloud providers.',
  },
  {
    category: 'Monitoring & Observability',
    icon: <BarChart sx={{ fontSize: 20 }} />,
    tools: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'],
    desc: 'Full-stack visibility so issues surface before they become incidents.',
  },
];

const principles = [
  {
    title: 'Simple beats impressive',
    body: 'The system has to make sense after the kickoff energy wears off. We prefer decisions that are easier to operate, explain, and extend.',
  },
  {
    title: 'Ownership is part of delivery',
    body: 'Documentation, pairing, and pragmatic handoff are part of the job. The outcome should still work when we are no longer in the room.',
  },
  {
    title: 'Context matters more than dogma',
    body: 'We use strong patterns, but not rigid ones. The right answer depends on your team, your timeline, and your constraints.',
  },
  {
    title: 'Straight answers, even inconvenient ones',
    body: 'If a plan is too ambitious or simply not the best use of budget, we will say so. That honesty tends to save everyone time.',
  },
];

const serviceOptions = [
  { value: '', label: 'Not sure yet' },
  { value: 'cloud', label: 'Cloud & Infrastructure' },
  { value: 'devops', label: 'DevOps & CI/CD' },
  { value: 'webdev', label: 'Web Development' },
  { value: 'consulting', label: 'Consulting & Strategy' },
  { value: 'other', label: 'Something else' },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MainPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box>

      {/* ═══════════════════════════════════════════════════════════ HERO */}
      <Box id="hero" sx={{ pt: { xs: 12, md: 10 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 600, mb: 2.5, letterSpacing: '0.08em', fontSize: '0.78rem' }}
              >
                CLOUD · DEVOPS · AUTOMATION · WEB DELIVERY
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4rem' }, mb: 3, color: 'text.primary' }}
              >
                Infrastructure and delivery that feels calm, clear, and under control.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, maxWidth: 540, mb: 4.5 }}
              >
                Symtex helps growing teams improve cloud foundations, streamline delivery through automation, and build web products with fewer surprises.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button variant="contained" size="large" onClick={() => scrollTo('contact')}>
                  Start a conversation
                </Button>
                <Button variant="outlined" size="large" onClick={() => scrollTo('services')}>
                  Explore services
                </Button>
              </Stack>
              <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
                {['AWS', 'Azure', 'Terraform', 'Kubernetes', 'React', 'GitHub Actions'].map((item) => (
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
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                {/* Hero image placement */}
                <ImagePlaceholder height={280} label="Hero image" />
                <Card>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack spacing={1}>
                      {[
                        { icon: <CloudQueue fontSize="small" />, label: 'Platform and cloud review' },
                        { icon: <Hub fontSize="small" />, label: 'Delivery workflow automation' },
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
                            py: 1,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(148, 163, 184, 0.08)',
                          }}
                        >
                          <Box sx={{ color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                            {item.icon}
                          </Box>
                          <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.85rem' }}>
                            {item.label}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ═══════════════════════════════════════════════════════ SERVICES */}
      <Box id="services" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', fontWeight: 600, mb: 2, letterSpacing: '0.08em', fontSize: '0.78rem' }}
            >
              SERVICES
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 2 }}
            >
              Built around delivery, not theatre.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 580 }}>
              We work with teams that need sharper systems, steadier releases, or experienced help getting a product into a shape they can trust.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid size={{ xs: 12, md: 6 }} key={service.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Stack spacing={2.5}>
                      {/* Service image placement */}
                      <ImagePlaceholder height={200} label={`${service.title} image`} />
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
                          <Box sx={{ color: 'primary.main', display: 'grid', placeItems: 'center' }}>
                            {service.icon}
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{ color: 'text.primary', fontSize: { xs: '1.1rem', md: '1.2rem' } }}
                          >
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.75 }}>
                          {service.desc}
                        </Typography>
                        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
                          {service.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(94, 234, 212, 0.07)',
                                color: 'primary.main',
                                border: '1px solid rgba(94, 234, 212, 0.15)',
                                fontSize: '0.72rem',
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ══════════════════════════════════════════════════ TECHNOLOGIES */}
      <Box id="technologies" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.015)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: { md: 'sticky' }, top: { md: 40 } }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'primary.main', fontWeight: 600, mb: 2, letterSpacing: '0.08em', fontSize: '0.78rem' }}
                >
                  TECHNOLOGIES
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 2.5 }}
                >
                  Automation-first from day one.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  We build systems that scale through automation — removing manual steps, enforcing consistency, and accelerating delivery. Every tool we choose makes the next change easier, not just the current one faster.
                </Typography>
                {/* Technologies image placement */}
                <ImagePlaceholder height={300} label="Technologies / stack image" />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                {technologies.map((tech) => (
                  <Card key={tech.category}>
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '10px',
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(94, 234, 212, 0.08)',
                            border: '1px solid rgba(94, 234, 212, 0.15)',
                            color: 'primary.main',
                            flexShrink: 0,
                          }}
                        >
                          {tech.icon}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            variant="h6"
                            sx={{ color: 'text.primary', fontSize: '1rem', mb: 0.5 }}
                          >
                            {tech.category}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.65 }}>
                            {tech.desc}
                          </Typography>
                          <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
                            {tech.tools.map((tool) => (
                              <Chip
                                key={tool}
                                label={tool}
                                size="small"
                                sx={{
                                  bgcolor: 'rgba(255,255,255,0.04)',
                                  color: 'text.secondary',
                                  border: '1px solid rgba(148, 163, 184, 0.12)',
                                  fontSize: '0.72rem',
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ══════════════════════════════════════════════════════════ ABOUT */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 600, mb: 2, letterSpacing: '0.08em', fontSize: '0.78rem' }}
              >
                ABOUT
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 2.5 }}
              >
                The kind of team we try to be.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2.5 }}>
                Symtex started from a pattern we kept seeing: capable teams slowed down by infrastructure debt, brittle delivery workflows, and technical decisions that had quietly outgrown the business.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                We stay deliberately small. That keeps the work sharp, the communication direct, and the delivery model closer to a senior partner embedded with your team than a large agency handing work across layers.
              </Typography>
              {/* About image placement */}
              <ImagePlaceholder height={260} label="Team image" />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2.5}>
                {principles.map((item) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: 'text.primary', mb: 1.5, fontSize: { xs: '1rem', md: '1.05rem' } }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                          {item.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Work environment image placement */}
              <Box sx={{ mt: 3 }}>
                <ImagePlaceholder height={220} label="Work environment image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ══════════════════════════════════════════════════════ CONTACT */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(255,255,255,0.015)' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', fontWeight: 600, mb: 2, letterSpacing: '0.08em', fontSize: '0.78rem' }}
            >
              CONTACT
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 2 }}
            >
              Start with the problem, not the perfect brief.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 520 }}>
              If you already know the scope, great. If you only know what hurts right now, that works too. We can usually tell pretty quickly whether we are a good fit.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* ── Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="name"
                          label="Name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="email"
                          label="Email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          name="service"
                          label="What are you looking for?"
                          select
                          value={form.service}
                          onChange={handleChange}
                        >
                          {serviceOptions.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          name="message"
                          label="Tell us about your project"
                          value={form.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={6}
                          placeholder="What are you building? What's not working? What do you need help with?"
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send sx={{ fontSize: '16px !important' }} />}
                        >
                          Send message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* ── Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2.5}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5, fontSize: '0.8rem', letterSpacing: '0.06em' }}
                    >
                      WHAT HAPPENS NEXT
                    </Typography>
                    <Typography variant="body2">
                      We review the context, reply with a sensible next step, and keep the conversation straightforward. If we are not the right fit, we will say that too.
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={3}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.75, fontSize: '0.8rem', letterSpacing: '0.03em' }}
                        >
                          EMAIL
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                          contact@symtex.dev
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.75, fontSize: '0.8rem', letterSpacing: '0.03em' }}
                        >
                          LOCATION
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                          Remote — we work with teams everywhere
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.75, fontSize: '0.8rem', letterSpacing: '0.03em' }}
                        >
                          RESPONSE TIME
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                          Usually within 24 hours
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
                {/* Contact image placement */}
                <ImagePlaceholder height={200} label="Office / team image" />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Minimal footer */}
      <Box
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 4,
          bgcolor: 'rgba(6, 11, 24, 0.42)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography variant="body2">
              © {new Date().getFullYear()} Symtex. All rights reserved.
            </Typography>
            <Typography variant="body2">contact@symtex.dev</Typography>
          </Box>
        </Container>
      </Box>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)} sx={{ width: '100%' }}>
          Message sent — we'll be in touch shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
