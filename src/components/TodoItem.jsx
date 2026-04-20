function TodoItem({ text, date, todoId, onDelete }) {
  return (
    <li className="bg-gray-600 scroll-auto">
      {text}
      <span className="ml-11">{new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}</span>
      <button className="text-red-800" onClick={() => onDelete(todoId)}>
        Delete &times;
      </button>
    </li>
  )
}

export default TodoItem