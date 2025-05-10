import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
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
          <Button component={RouterLink} to="/" color="primary" sx={{ fontWeight: 600 }}>
            Tasks
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={RouterLink}
            to="/"
            sx={{ borderRadius: 2, fontWeight: 600 }}
          >
            Add Task
          </Button>
          <IconButton>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 