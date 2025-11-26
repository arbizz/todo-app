export default function TodoList({
  todos,
  onDelete,
  onToggleComplete,
  onEdit,
}) {
  const getCategoryColor = (cat) => {
    return {
      "Urgent": "bg-red-200 text-red-700",
      "Important": "bg-yellow-200 text-yellow-700",
      "Normal": "bg-green-200 text-green-700"
    }[cat];
  };

  return (
    <ul className="space-y-3 overflow-y-auto">
      {todos.map((todo) => (
        <li 
          key={todo._id}
          className="flex items-center justify-between bg-gray-100 rounded p-3"
        >
          <div 
            className="flex flex-col cursor-pointer"
            onClick={() => onToggleComplete(todo)}
          >
            <span className={`font-medium ${todo.completed ? "line-through text-gray-500" : ""}`}>
              {todo.title}
            </span>

            <span 
              className={`text-xs mt-1 px-2 py-1 rounded w-fit ${getCategoryColor(todo.category)}`}
            >
              {todo.category}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              onClick={() => onToggleComplete(todo)}
            >
              Complete
            </button>

            <div className="flex gap-2">
              <button 
                className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => onEdit(todo)}
              >
                Edit
              </button>

              <button 
                className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => onDelete(todo._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
  