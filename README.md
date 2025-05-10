# Kanban To-Do List Application

A full-stack Kanban-style To-Do List application built with React, Express.js, and MongoDB.

## Features

- Drag-and-drop task management
- Three columns: To-Do, In-Progress, and Completed
- Task details including title, description, and timestamps
- Persistent storage with MongoDB
- Clean and modern UI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the development servers:
   ```bash
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
kanban-todo/
├── frontend/          # React frontend application
├── backend/           # Express.js backend server
└── package.json       # Root package.json for managing both applications
``` 