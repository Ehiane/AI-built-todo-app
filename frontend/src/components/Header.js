import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isTasksActive = location.pathname === '/';

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: '#eee' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
          >
            My Tasks
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: isTasksActive ? 'primary.main' : 'text.secondary',
                fontWeight: 600,
                fontSize: '0.875rem',
                position: 'relative',
                '&:after': isTasksActive ? {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '100%',
                  height: 2,
                  backgroundColor: 'primary.main',
                  borderRadius: 1,
                } : {}
              }}
            >
              Tasks
            </Typography>
          </Box>
        </Box>
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