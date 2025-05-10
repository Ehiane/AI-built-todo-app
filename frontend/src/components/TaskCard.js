import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const ItemTypes = {
  CARD: 'card',
};

const TaskCard = ({ task, index, columnId, moveTask, onTaskDeleted, allColumns, onDropTask }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) return;
      if (item.columnId === columnId && item.index === index) return;
      if (item.columnId === columnId) {
        moveTask(columnId, item.index, columnId, index);
        item.index = index;
      }
    },
    drop(item, monitor) {
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

  const handleClick = () => {
    navigate(`/task/${task.id || task._id}`);
  };

  // Get formatted date
  const dueDate = task.dueDate ? format(new Date(task.dueDate), 'MMM d') : null;
  const tags = task.tags || [];

  return (
    <Card
      ref={ref}
      onClick={handleClick}
      sx={{
        mb: 2,
        backgroundColor: isDragging ? '#f8fafc' : '#fff',
        opacity: isDragging ? 0.7 : 1,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {task.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {tags.map((tag) => (
            <span key={tag} className={`task-tag task-tag-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {dueDate && (
            <Typography variant="caption" color="text.secondary">
              Due {dueDate}
            </Typography>
          )}
          {task.assignee && (
            <Avatar
              src={task.assignee.avatar}
              alt={task.assignee.name}
              sx={{ width: 24, height: 24 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;