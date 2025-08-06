import { useState } from 'react'
import AddTodo from './components/add-todo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn about redux tookit</h1>
    <AddTodo />
    <Todos  />
    </>
  )
}

export default App
