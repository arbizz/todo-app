import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";
import { useEffect, useState } from "react";

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  getCompleted,
} from "./api/todoApi";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortCategory, setSortCategory] = useState("all");
  const [completed, setCompleted] = useState([]);

  const loadCompleted = async () => {
    const res = await getCompleted();
    console.log(res.data);
    setCompleted(res.data);
  };

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
    loadCompleted();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (editingTodo) {
      await updateTodo(editingTodo._id, data);
      setEditingTodo(null);
    } else {
      await createTodo(data);
    }
    loadTodos();
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await completeTodo(todo._id)
    loadTodos();
    loadCompleted();
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const openModalForCreate = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const filteredTodos = sortCategory === "all" ? todos : todos.filter((t) => t.category === sortCategory);

  return (
    <div className="max-h-screen bg-gray-100 flex justify-center gap-8 py-10">
      <div className="flex flex-col items-stretch w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Todo App</h1>
          <button
            onClick={openModalForCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add +
          </button>
        </div>

        <div className="mb-4">
          <select
            value={sortCategory}
            onChange={(e) => setSortCategory(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="all">All Categories</option>
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
            <option value="Normal">Normal</option>
          </select>
        </div>

        <TodoList
          todos={filteredTodos}
          onDelete={handleDelete}
          onToggleComplete={handleToggle}
          onEdit={handleEdit}
        />

        {isModalOpen && (
          <TodoForm
            onSubmit={handleCreateOrUpdate}
            editingTodo={editingTodo}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>

      <div className="flex flex-col items-stretch w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Completed Tasks</h2>
        <CompletedList completed={completed} />
      </div>
    </div>
  );
}
