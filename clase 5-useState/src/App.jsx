import { useState } from 'react'
import { Tasks } from './components/Tasks'
import './App.css'

function App() {

  const [task, setTask] = useState([])

  const addTaskHandler = (task) =>{
    setTask( (tareas) => [...tareas, task] )
  }

  return (
    <>
      <button onClick={() => addTaskHandler('Lavar Papas')}>Lavar papas</button>
      <button onClick={() => addTaskHandler('Picar papas')}>Picar papas</button>
      <button onClick={() => addTaskHandler('Freir papas')}>Freir papas</button>

      <ul>
        <Tasks tasks={task}/>
      </ul>
    </>
  )
}

export default App
