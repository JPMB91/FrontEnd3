import PropTypes from "prop-types"
import {lista} from '../styles/Tasks.module.css'

export const Tasks = ({ tasks }) => {
  return (
    <>
    <h1>Lista de Tareas:</h1>
      {tasks.map(( task, index) => {
        return <li className={lista} key={index}>{task}</li>
      })}
   
    </>
  )
}

Tasks.propTypes={
  tasks: PropTypes.array.isRequired
}