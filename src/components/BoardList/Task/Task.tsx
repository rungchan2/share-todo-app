import React from 'react'
import { taskWrapper, title, description } from './Task.css.ts'

type TTaskProps = {
  taskName: string
  taskId: string
  taskDescription: string
  boardId: string
  index: number
}

const Task:React.FC<TTaskProps> = ({ taskName, taskId, taskDescription, boardId, index }) => {
  return (
    <div className={taskWrapper}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  )
}

export default Task
