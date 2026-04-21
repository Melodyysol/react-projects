import { useRef, useEffect, useState } from 'react'
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
  const [deletedId, setDeletedId] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodo))
  }, [newTodo])

  const todoRef = useRef(null)
  useEffect(() => {
    const todoRefHTML = todoRef.current
    if (todoRefHTML) {
      todoRefHTML.scrollTop = todoRefHTML.scrollHeight
    }
  }, [newTodo])

  function removeTodo(id) {
    setDeletedId(id)
    setTimeout(() => {
      setNewTodo(prevTodos => prevTodos.filter(todo => todo.id !== id))
      setDeletedId(null)
    }, 1000);
  }



  return (
    <form className='bg-gray-700 pt-10 pb-10 text-white m-auto border-2 border-blue-300 rounded-2xl max-h-screen w-100 flex flex-col items-center gap-10' onSubmit={e => e.preventDefault()}>
      <h1 className="text-3xl text-green-600 font-extrabold">To Do List</h1>
      <TodoInput 
        setNewTodo={setNewTodo}
      />
      {newTodo.length === 0 && <p>No todos yet 👀</p>}
      <ul 
       className='flex flex-col gap-4 max-h-screen overflow-scroll w-85 px-5' 
       ref={todoRef}
      >
       {newTodo.map(todo => (
         <TodoItem 
          key={todo.id} 
          todoId={todo.id}
          text={todo.text} 
          date={todo.date} 
          onDelete={removeTodo}
          isDeleted={deletedId === todo.id}
         />
       ))}
      </ul>
    </form>
  )
}

export default App

