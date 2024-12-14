# Full-Stack To-Do List Application

This repository contains a full-stack To-Do List application built with the following technologies:

- **Backend**: Node.js with Express.js
- **Frontend**: React with Redux Toolkit, RTK Query, and Tailwind CSS

---

## Features

### General Features:
- Add, edit, delete, and delete all tasks.
- View all tasks with a responsive UI.
- Seamless integration between the frontend and backend using RTK Query.
- Persistent in-memory task management for demonstration purposes.

### Backend Features:
- RESTful API endpoints for managing tasks.
- In-memory database implementation for simplicity.
- Modular routing structure for scalability.

### Frontend Features:
- Dynamic and responsive UI built with Tailwind CSS.
- State management with Redux Toolkit.
- API interactions handled using RTK Query.
- User-friendly task input and editing with real-time updates.

---
## Backend API Endpoints

### Base URL: `http://localhost:3000/api`

| HTTP Method | Endpoint      | Description             |
|-------------|---------------|-------------------------|
| GET         | `/tasks`      | Fetch all tasks         |
| POST        | `/tasks`      | Add a new task          |
| PUT         | `/tasks/:id`  | Edit an existing task   |
| DELETE      | `/tasks/:id`  | Delete a specific task  |
| DELETE      | `/tasks`      | Delete all tasks        |

---

## Future Enhancements

### Task Management Features:
- **Prioritize Tasks**: Add priority levels (High, Medium, Low).
- **Categorize Tasks**: Enable task categorization (Work, Personal, etc.).
- **Search and Filter**: Implement search bar and filtering.

### User Experience:
- **Dark Mode**: Add a toggle for light/dark themes.
- **Drag-and-Drop Sorting**: Allow users to reorder tasks.

### Backend:
- **Database Integration**: Replace in-memory storage with a database like MongoDB or PostgreSQL.
- **Authentication**: Add user login and task association.



