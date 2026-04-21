function TodoItem({ text, date, todoId, onDelete, isDeleted }) {
  return (
    <li className={`bg-gray-600 rounded p-3 flex justify-between items-center gap-4 border-2 border-gray-500 ${isDeleted ? 'animate-fade-out opacity-50' : ''}`}>
      {text}
      <span className="font-semibold text-[#60a5fa] text-sm">{new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}</span>
      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded cursor-pointer disabled:opacity-50" onClick={() => onDelete(todoId)} disabled={isDeleted}>
        Delete &times;
      </button>
    </li>
  )
}

export default TodoItem