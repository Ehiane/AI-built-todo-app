import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchTasks = () => api.get('/tasks');

export const createTask = (taskData) => api.post('/tasks', taskData);

export const updateTask = (taskId, taskData) => api.put(`/tasks/${taskId}`, taskData);

export const updateTaskStatus = (taskId, statusData) => api.patch(`/tasks/${taskId}/status`, statusData);

export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);

export default api; 