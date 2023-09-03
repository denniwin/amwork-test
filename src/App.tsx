import { useState, useEffect } from 'react'
import './App.scss'
import TodoHeader from './components/todo-header/todos-header'
import TodoItem from './components/todo-item/todos-item'
import { GetTodos } from './services/API/todos.api'
import { Todos } from './services/models/todos'


function App() {

  useEffect(() => {
    GetTodos().then(td => setTodos(td))

  }, [])
  
  const [todos, setTodos] = useState<Todos[]>([])

  return (
    <>
      <div className="todos">
        <TodoHeader/>
        {todos && todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
  </div>

    </>
  )
}

export default App
