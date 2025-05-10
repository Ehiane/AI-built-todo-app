import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button, MenuItem, Select } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ background: '#fafbfc', borderTop: 1, borderColor: '#eee', mt: 6, py: 4 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2 }}>
        <Typography variant="h5" align="center" fontWeight={700} mb={2}>
          My Tasks
        </Typography>
        <Typography align="center" mb={2}>
          Stay updated on productivity tips and tricks
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField size="small" placeholder="Enter your email" sx={{ mr: 1, width: 260 }} />
          <Button variant="contained">Subscribe</Button>
        </Box>
        <Grid container spacing={2} justifyContent="center" mb={2}>
          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>About</Typography>
            <Link href="#" underline="none" color="text.secondary" display="block">Our Story</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Blog</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Careers</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>Product</Typography>
            <Link href="#" underline="none" color="text.secondary" display="block">Features</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Integrations</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Pricing</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>Support</Typography>
            <Link href="#" underline="none" color="text.secondary" display="block">Help Center</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Contact Us</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>Resources</Typography>
            <Link href="#" underline="none" color="text.secondary" display="block">Downloads</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Documentation</Link>
            <Link href="#" underline="none" color="text.secondary" display="block">Tutorials</Link>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, flexWrap: 'wrap' }}>
          <Select size="small" value="English" sx={{ minWidth: 100 }}>
            <MenuItem value="English">English</MenuItem>
          </Select>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ flex: 1 }}>
            © 2023 My Tasks. &nbsp;•&nbsp; Privacy Policy &nbsp;•&nbsp; Terms of Service
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Link href="#" color="inherit"><span role="img" aria-label="refresh">🔄</span></Link>
            <Link href="#" color="inherit"><span role="img" aria-label="like">👍</span></Link>
            <Link href="#" color="inherit"><span role="img" aria-label="github">🐙</span></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 