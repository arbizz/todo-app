export default function CompletedList({ completed }) {
    if (!completed.length) {
      return <p className="text-gray-500 text-center mt-4">No completed tasks yet.</p>;
    }
  
    return (
      <div className="mt-6 overflow-y-auto">
        <div className="space-y-3">
          {completed.map((task) => (
            <div
              key={task._id}
              className="p-3 rounded bg-gray-100 border-l-4 border-green-500"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium line-through">{task.title}</p>
                  <p className="text-xs text-gray-500">Category: {task.category}</p>
                </div>
  
                <span className="text-xs text-gray-400">
                  {new Date(task.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  