import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: '#eee' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
        >
          My Tasks
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;