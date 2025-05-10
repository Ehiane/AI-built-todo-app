import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card, CardContent, Typography, IconButton, Box, Chip, Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { format } from 'date-fns';
import { deleteTask, updateTask } from '../services/api';
import EditTaskModal from './EditTaskModal';

const ItemTypes = {
  CARD: 'card',
};

// Example tag color mapping
const tagColors = {
  Marketing: 'secondary',
  Planning: 'primary',
  'Competitive Analysis': 'warning',
  Video: 'success',
  Content: 'success',
  'Feature Launch': 'info',
  Design: 'secondary',
  Research: 'default',
  UX: 'info',
  Email: 'secondary',
  Testing: 'info',
  Reporting: 'warning',
  Presentation: 'secondary',
  Website: 'primary',
  Review: 'info',
};

const TaskCard = ({ task, index, columnId, moveTask, onTaskDeleted, allColumns, onDropTask }) => {
  const ref = useRef(null);
  const [editOpen, setEditOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) return;
      if (item.columnId === columnId && item.index === index) return;
      // Only reorder within the same column
      if (item.columnId === columnId) {
        moveTask(columnId, item.index, columnId, index);
        item.index = index;
      }
    },
    drop(item, monitor) {
      // If dropped in a new column, update status
      if (item.columnId !== columnId) {
        moveTask(item.columnId, item.index, columnId, index);
        onDropTask(item.task, columnId);
        item.columnId = columnId;
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { type: ItemTypes.CARD, task, index, columnId, status: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      onTaskDeleted();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditSave = async (updatedTask) => {
    try {
      await updateTask(updatedTask.id || updatedTask._id, {
        title: updatedTask.title,
        description: updatedTask.description,
      });
      setEditOpen(false);
      onTaskDeleted(); // reload tasks
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Placeholder tags and assignee for demo
  const tags = task.tags || [];
  const assignee = task.assignee || null;
  const dueDate = task.dueDate || null;

  return (
    <>
      <Card
        ref={ref}
        sx={{
          mb: 2,
          backgroundColor: isDragging ? '#f8fafc' : '#fff',
          opacity: isDragging ? 0.7 : 1,
          borderRadius: 2,
          boxShadow: isDragging ? 4 : 1,
          border: '1px solid #eee',
          transition: 'box-shadow 0.2s',
          position: 'relative',
        }}
      >
        <CardContent sx={{ pb: '16px !important' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ flex: 1, pr: 1, lineHeight: 1.2 }}>
              {task.title}
            </Typography>
            <Box>
              <Tooltip title="More options">
                <IconButton size="small" onClick={e => setAnchorEl(e.currentTarget)}>
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Menu anchorEl={anchorEl} open={openMenu} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => { setEditOpen(true); setAnchorEl(null); }}><EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit</MenuItem>
                <MenuItem onClick={() => { handleDelete(task.id || task._id); setAnchorEl(null); }}><DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, minHeight: 32 }}>
            {task.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                color={tagColors[tag] || 'default'}
                sx={{ fontWeight: 600, fontSize: 12 }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            {dueDate && (
              <Typography variant="caption" color="text.secondary">
                <span role="img" aria-label="due">📅</span> {format(new Date(dueDate), 'MMM d')}
              </Typography>
            )}
            {assignee && (
              <Avatar src={assignee.avatar} alt={assignee.name} sx={{ width: 24, height: 24 }} />
            )}
          </Box>
        </CardContent>
      </Card>
      <EditTaskModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={task}
        onSave={handleEditSave}
      />
    </>
  );
};

export default TaskCard; 