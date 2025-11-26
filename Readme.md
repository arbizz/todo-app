# MERN Todo App

A simple and clean **Todo Application** built using **MERN Stack** (MongoDB, Express.js, React, Node.js) + **Tailwind CSS**

## Features

- CRUD Todos  
- Sort by Categories: `Urgent`, `Important`, `Normal`  
- Toggle Complete → moves task to **completed collection**  
- Completed list sorted by newest  
- TailwindCSS UI  
- Modal-based form for Create/Edit  
- Clean folder structure with `src/`

---

## Backend Setup (/backend)

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create .env
```bash
MONGO_URI=your_mongodb_connection_string
```

### 3. Run Backend
```bash
npm run dev
```

Backend runs at:
```bash
http://localhost:5000
```

---

## Frontend Setup (/frontend)

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2.Run Frontend
```bash
npm run dev
```

Frontend runs at:
```bash
http://localhost:5173
```

---

## API Endpoints

### Todos
| Method | Endpoint                  | Description           |
| ------ | ------------------------- | --------------------- |
| GET    | `/api/todos`              | Get all todos         |
| POST   | `/api/todos`              | Create todo           |
| PUT    | `/api/todos/:id`          | Update todo           |
| DELETE | `/api/todos/:id`          | Delete todo           |
| PATCH  | `/api/todos/:id/complete` | Move todo → completed |

### Completed
| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/todos/completed` | Get completed list |

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- ESModule (`type: module`)
- REST API architecture

### **Frontend**
- React (Vite)
- TailwindCSS
- Axios for API calls

---

## License

MIT License