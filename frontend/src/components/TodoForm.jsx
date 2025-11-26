import { useState, useEffect } from "react";

export default function TodoForm({ onSubmit, editingTodo, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Normal");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setCategory(editingTodo.category);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
        
        <h2 className="text-xl font-bold mb-4">
          {editingTodo ? "Edit Todo" : "Add Todo"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="New todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
            <option value="Normal">Normal</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              {editingTodo ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
