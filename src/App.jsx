import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput.jsx'
import TodoItem from './components/TodoItem.jsx'


function App() {
  const [newTodo, setNewTodo] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos")
      return savedTodos ? JSON.parse(savedTodos) : []
    } catch (error) {
      console.error("Error parsing saved todos:", error)
      return []
    }
  })
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodo))
  }, [newTodo])

  function removeTodo(id) {
    setNewTodo(prevTodos => prevTodos.filter(todo => todo.id !== id))
    setTimeout(() => {
      alert('Successfully deleted!')
    }, 1000);
  }



  return (
    <form className='bg-gray-700 p-10 text-white m-auto border-2 border-blue-300 rounded-2xl h-100 w-100 flex flex-col items-center gap-10' onSubmit={e => e.preventDefault()}>
      <h1 className="text-3xl text-green-600 font-extrabold">To Do List</h1>
      <TodoInput 
        setNewTodo={setNewTodo}
      />
      {newTodo.length === 0 && <p>No todos yet 👀</p>}
      <ul>
       {newTodo.map(todo => (
         <TodoItem 
          key={todo.id} 
          todoId={todo.id}
          text={todo.text} 
          date={todo.date} 
          onDelete={removeTodo}
         />
       ))}
      </ul>
    </form>
  )
}

export default App

