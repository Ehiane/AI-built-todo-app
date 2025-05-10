import React, { useState, useEffect, useCallback } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskDetailsPage from './pages/TaskDetailsPage';
import { fetchTasks, updateTaskStatus } from './services/api';

const getInitialColumns = () => ({
  todo: { title: 'To Do', items: [] },
  inProgress: { title: 'In Progress', items: [] },
  completed: { title: 'Completed', items: [] }
});

function KanbanBoard({ tasks, setTasks, loadTasks, moveTask, handleTaskDeleted, handleDrop }) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" fontWeight={700}>My Tasks</Typography>
        <TaskForm onTaskCreated={loadTasks} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {Object.entries(tasks).map(([columnId, column]) => (
            <Grid item xs={12} md={4} key={columnId}>
              <Paper
                sx={{
                  p: 2,
                  height: '70vh',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fff',
                  borderRadius: 3,
                  boxShadow: 2
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {column.title} ({column.items.length})
                </Typography>
                <TaskColumn
                  columnId={columnId}
                  tasks={column.items}
                  allColumns={tasks}
                  moveTask={moveTask}
                  onTaskDeleted={handleTaskDeleted}
                  onDropTask={handleDrop}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

function App() {
  const [tasks, setTasks] = useState(getInitialColumns);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      const newColumns = getInitialColumns();
      response.data.forEach(task => {
        if (newColumns[task.status]) {
          newColumns[task.status].items.push(task);
        }
      });
      setTasks(newColumns);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleTaskDeleted = () => {
    loadTasks();
  };

  const moveTask = useCallback((fromColumnId, fromIndex, toColumnId, toIndex) => {
    setTasks(prevTasks => {
      const sourceColumn = prevTasks[fromColumnId];
      const destColumn = prevTasks[toColumnId];
      const sourceItems = [...sourceColumn.items];
      const destItems = fromColumnId === toColumnId ? sourceItems : [...destColumn.items];
      const [movedTask] = sourceItems.splice(fromIndex, 1);
      destItems.splice(toIndex, 0, movedTask);
      const newTasks = {
        ...prevTasks,
        [fromColumnId]: {
          ...sourceColumn,
          items: fromColumnId === toColumnId ? destItems : sourceItems
        },
        [toColumnId]: {
          ...destColumn,
          items: destItems
        }
      };
      return newTasks;
    });
  }, []);

  const handleDrop = async (task, toColumnId) => {
    if ((task.status !== toColumnId) && toColumnId) {
      try {
        await updateTaskStatus((task.id || task._id), { status: toColumnId });
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  };

  if (!tasks || Object.keys(tasks).length === 0) {
    return <Typography align="center">Loading tasks...</Typography>;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <KanbanBoard
              tasks={tasks}
              setTasks={setTasks}
              loadTasks={loadTasks}
              moveTask={moveTask}
              handleTaskDeleted={handleTaskDeleted}
              handleDrop={handleDrop}
            />
          }
        />
        <Route path="/task/:id" element={<TaskDetailsPage onTaskUpdated={loadTasks} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 