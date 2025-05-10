import React from 'react';
import { Box, Paper, Typography, Button, Chip, Avatar, Divider, Grid, Link, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TaskDetailsPage = () => {
  // Placeholder data for now
  const task = {
    title: 'Implement User Authentication Module',
    description: 'Develop and integrate the user authentication system including signup, login, password reset, and session management.',
    createdAt: '2024-07-10',
    updatedAt: '2024-07-25',
    dueDate: '2024-08-15',
    priority: 'High',
    assignedTo: {
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    status: 'inProgress',
    tags: ['Development', 'Security', 'Backend'],
    activity: [
      { type: 'created', date: '2024-07-10 09:00 AM' },
      { type: 'status', from: 'To-Do', to: 'In-Progress', date: '2024-07-12 02:30 PM' },
      { type: 'description', date: '2024-07-15 10:00 AM' },
      { type: 'comment', date: '2024-07-18 04:15 PM' },
      { type: 'status', from: 'In-Progress', to: 'In-Progress (Updated)', date: '2024-07-25 11:00 AM' },
    ],
    comments: [
      { user: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', text: 'Quick question - are we using JWT for session tokens, or something else?', date: '2024-07-18 04:15 PM' },
      { user: 'Sarah Chen', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Good point, John. Yes, planning to use JWT with appropriate security measures.', date: '2024-07-18 04:20 PM' },
      { user: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', text: 'Got it. Looks good!', date: '2024-07-18 04:25 PM' },
    ],
  };

  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 4, mb: 6 }}>
      <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }} component={Link} href="/">
        Back to Tasks
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" fontWeight={700} mb={1}>{task.title}</Typography>
            <Typography color="text.secondary" mb={2}>{task.description}</Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item><Typography variant="body2">Created Date<br /><b>{task.createdAt}</b></Typography></Grid>
              <Grid item><Typography variant="body2">Last Updated<br /><b>{task.updatedAt}</b></Typography></Grid>
              <Grid item><Typography variant="body2">Due Date<br /><b>{task.dueDate}</b></Typography></Grid>
            </Grid>
            <Chip label={task.priority} color="error" size="small" sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Avatar src={task.assignedTo.avatar} />
              <Typography>{task.assignedTo.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {task.tags.map(tag => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Box>
          </Paper>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>Activity Log</Typography>
            {task.activity.map((act, i) => (
              <Box key={i} mb={1}>
                {act.type === 'created' && <Typography color="primary">Task was created. <span style={{ color: '#888' }}>{act.date}</span></Typography>}
                {act.type === 'status' && <Typography>Status changed from <b>{act.from}</b> to <b>{act.to}</b>. <span style={{ color: '#888' }}>{act.date}</span></Typography>}
                {act.type === 'description' && <Typography>Description was updated. <span style={{ color: '#888' }}>{act.date}</span></Typography>}
                {act.type === 'comment' && <Typography>Comment was added. <span style={{ color: '#888' }}>{act.date}</span></Typography>}
              </Box>
            ))}
          </Paper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>Comments</Typography>
            {task.comments.map((comment, i) => (
              <Box key={i} mb={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={comment.avatar} sx={{ width: 28, height: 28 }} />
                  <Typography fontWeight={600}>{comment.user}</Typography>
                  <Typography variant="caption" color="text.secondary">{comment.date}</Typography>
                </Box>
                <Typography sx={{ ml: 5 }}>{comment.text}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField size="small" placeholder="Write your comment here..." sx={{ flex: 1 }} />
              <Button variant="contained">Post Comment</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="subtitle2" mb={1}>Status</Typography>
            <Chip label={task.status === 'inProgress' ? 'In-Progress' : task.status} color="warning" />
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" mb={1}>Actions</Typography>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>Edit Task</Button>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>Mark as Completed</Button>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>Move to To Do</Button>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>Archive Task</Button>
            <Button fullWidth variant="contained" color="error">Delete Task</Button>
          </Paper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="subtitle2" mb={1}>Associated Info</Typography>
            <Link href="#">Project: MyTasks Application</Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskDetailsPage; 