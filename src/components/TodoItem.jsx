function TodoItem({ text, date, todoId, onDelete, onEdit, isDeleted, isEdited }) {
  return (
    <li className={`bg-gray-600 rounded p-3 flex justify-between items-center gap-4 border-2 border-gray-500 ${isDeleted ? 'animate-fade-out opacity-50' : ''}`}>
      {isEdited ? (
        <span className="font-semibold text-yellow-400 text-sm">{text} (edited)</span>
      ) : (
        <span className="font-semibold text-white text-sm">{text}</span>
      )}
      <span className="font-semibold text-[#60a5fa] text-sm">{new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}</span>
      <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded cursor-pointer disabled:opacity-50" onClick={() => onEdit(todoId)} disabled={isDeleted}>
        Edit
      </button>
      <button className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded cursor-pointer disabled:opacity-50" onClick={() => onDelete(todoId)} disabled={isDeleted}>
        Delete &times;
      </button>
    </li>
  )
}

export default TodoItem