import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
  Stack,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import { Send } from '@mui/icons-material';

const serviceOptions = [
  { value: '', label: 'Not sure yet' },
  { value: 'cloud', label: 'Cloud & Infrastructure' },
  { value: 'devops', label: 'DevOps & CI/CD' },
  { value: 'webdev', label: 'Web Development' },
  { value: 'consulting', label: 'Consulting & Strategy' },
  { value: 'other', label: 'Something else' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 540 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, color: 'text.primary' }}
            >
              Start with the problem, not the perfect brief.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
              If you already know the scope, great. If you only know what hurts right now, that works too. We can usually tell pretty quickly whether we are a good fit.
            </Typography>
            <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
              {serviceOptions.slice(1, 5).map((option) => (
                <Chip
                  key={option.value}
                  label={option.label}
                  onClick={() => setForm((current) => ({ ...current, service: option.value }))}
                  sx={{
                    bgcolor: form.service === option.value ? 'rgba(94, 234, 212, 0.12)' : 'rgba(255,255,255,0.04)',
                    color: form.service === option.value ? 'text.primary' : 'text.secondary',
                    border: '1px solid',
                    borderColor: form.service === option.value ? 'rgba(94, 234, 212, 0.28)' : 'rgba(148, 163, 184, 0.12)',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 10 }}>
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

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2.5}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5, fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                      WHAT HAPPENS NEXT
                    </Typography>
                    <Typography variant="body2">
                      We review the context, reply with a sensible next step, and keep the conversation straightforward. If we are not the right fit, we will say that too.
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    EMAIL
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    contact@symtex.dev
                  </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    LOCATION
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Remote — we work with teams everywhere
                  </Typography>
                    </Box>

                    <Box sx={{ mb: 0 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    RESPONSE TIME
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Usually within 24 hours
                  </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ px: 1 }}>
                  <Typography variant="body2">
                    Not sure what you need yet? That is common. A short description of the situation is enough to start.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSubmitted(false)} severity="success" variant="filled">
          Thanks! We'll be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
