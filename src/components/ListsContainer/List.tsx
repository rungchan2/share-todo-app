import { GrSubtract } from 'react-icons/gr'
import { IList } from '../../types'
import Task from '../BoardList/Task/Task'
import { useTypedDispatch } from '../../hooks/redux'
import { deleteList, setModalActive } from '../../store/slices/boardSlice'
import { createLog } from '../../store/slices/loggerSlice'
import { v4 } from 'uuid'
import { ITask } from '../../types'
import { setModalData } from '../../store/slices/modalSlice'
import { listWrapper, header, Name, deleteButton } from './List.css.ts'
import ActionButton from '../Buttons/ActionButton'

type TListProps = {
  list: IList
  boardId: string
}

const List = ({
  list,
  boardId
} : TListProps) => {

  const dispatch = useTypedDispatch()

  const handleDeleteList = (listId: string) => {
    dispatch(deleteList({boardId, listId}))
    dispatch(createLog({
      logId: v4(),
      logAuthor: 'user',
      logMessage: `List ${list.listName} deleted`,
      logDate: new Date().toISOString()
    }))
  }

  const handleTaskChange = (boardId: string, listId: string, taskId: string, task: ITask) => {
    console.log(boardId, listId, taskId, task)
    dispatch(setModalData({boardId, listId, task}))
    dispatch(setModalActive(true))
  }

  return (
    <div className={listWrapper}>
      <div className={header}>
        <div className={Name}>
          <h3>{list.listName}</h3>
        </div>
        <GrSubtract className={deleteButton} onClick={() => handleDeleteList(list.listId)}/>
      </div>
      {list.tasks.map((task, index) => (
        <div onClick={() => handleTaskChange(boardId, list.listId, task.taskId, task)} key={task.taskId}>
          <Task 
          taskName={task.taskName} 
          taskId={task.taskId}
          taskDescription={task.taskDescription}
          boardId={boardId}
          index={index}
          />
        </div>
      ))}
      <ActionButton boardId={boardId} listId={list.listId}/>
    </div>
  )
}

export default List