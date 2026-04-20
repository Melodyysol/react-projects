import { useState, useEffect, useRef } from 'react'

function TodoInput({ setNewTodo }) {

  const [inputValue, setInputValue] = useState("")
  const [dueDate, setDueDate] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const isDisabled = inputValue.trim() === "" || dueDate === "";

  function addTodo() {
    if (isDisabled) return;

    setNewTodo(prevTodos => [
      ...prevTodos,
      { id: crypto.randomUUID(), text: inputValue, date: dueDate }
    ])
    setInputValue("")
    setDueDate("")
    inputRef.current.focus()
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !isDisabled) {
      e.preventDefault()
      addTodo()
    }
  }
  return (
    <div className='flex flex-col gap-4 bg-gray-800 rounded-2xl p-5' onKeyDown={handleKeyDown}>
      <input 
        className='bg-gray-500 rounded p-2 outline-none'
        ref={inputRef}
        type="text" 
        placeholder="Enter a todo item"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <input type="date"
        className='bg-gray-600 rounded p-2 outline-none'
        placeholder="Due date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button
        className={`px-4 py-2 rounded ${isDisabled ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : 'bg-green-600 cursor-pointer hover:bg-green-700'}`}
       type='submit' onClick={addTodo} disabled={isDisabled}>
        Add Todo
      </button>
    </div>
  )
}

export default TodoInput