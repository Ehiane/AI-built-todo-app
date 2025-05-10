# Kanban To-Do List Application
A full-stack Kanban-style To-Do List application built with **React**, **Express.js**, and **SQLite**. Will be configuring the rest later. 

## Demo
https://github.com/user-attachments/assets/33a5ffbf-3501-4b61-87be-19d1a43b44bc

## About

This project explores how modern AI tools can accelerate and enhance the development process. Tools used include:

- **Cursor** – for code generation and auto-completion
- **Visily** – for rapid UI prototyping using natural language prompts
- **Gemini** – for contextual AI development suggestions
- **ChatGPT** – for architectural planning, bug fixing, and AI pair programming
- **Bolt** – for generating UI mockups and interactive design systems from prompts

![About Section Screenshot](./screenshots/about-section.png)

## Features

- 🟨 Drag-and-drop task management (Kanban style)
- 🟧 Three columns: **To-Do**, **In-Progress**, and **Completed**
- 📄 Task cards include:
  - `title`
  - `description`
  - `createdAt`
  - `updatedAt`
  - `statusChangeTimestamps` (when moved between stages)
- 💾 Persistent storage using MongoDB
- 🎨 Clean and modern UI built with Material UI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/kanban-todo.git
   cd kanban-todo
   ```

2. **Install all dependencies**  
   ```bash
   npm run install-all
   ```

3. **Environment Variables**  
   Create a `.env` file inside the `backend/` folder:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the development servers**  
   ```bash
   npm start
   ```

The app will be live at:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

## Project Structure

```
kanban-todo/
├── frontend/          # React frontend application
├── backend/           # Express.js backend server
└── package.json       # Root package.json for managing both apps
```

