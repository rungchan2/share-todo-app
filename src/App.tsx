import { appContainer , board, buttonContainer, button} from './App.css.ts'
import './App.css'
import BoardList from './components/BoardList/BoardList.tsx'
import {useState} from 'react'
import { useTypedSelector } from './hooks/redux'
import ListsContainer from './components/ListsContainer/ListsContainer.tsx'
import ModalEdit from './components/ModalEdit/ModalEdit.tsx'
import LoggerModal from './components/ModalLogger/LoggerModal.tsx'
import { useTypedDispatch } from './hooks/redux'
import { deleteBoard } from './store/slices/boardSlice.ts'
import { createLog } from './store/slices/loggerSlice.ts'
import { v4 } from 'uuid'

function App() {
  const [activeBoardId, setActiveBoardId] = useState<string>('board-0')
  const boardArray = useTypedSelector(state => state.board.boardArray)
  const activeBoard = boardArray.filter(board => board.boardId === activeBoardId)[0]
  const getModalActive = useTypedSelector(state => state.board.modalActive)
  const [isLoggerOpen, setIsLoggerOpen] = useState<boolean>(false)
  const dispatch = useTypedDispatch()
  const handleDelete = () => {
    if (boardArray.length > 1) {
      dispatch(deleteBoard(activeBoardId))

      const newIndexToSet = boardArray.findIndex(board => board.boardId === activeBoardId)

      if (newIndexToSet === 0) {
        setActiveBoardId(boardArray[1].boardId)
      } else {
        setActiveBoardId(boardArray[newIndexToSet - 1].boardId)
      }
    } else {
      alert("게시판은 최소 하나 이상 존재해야 합니다.")
    }
  }

  return (
   
    <>
    {isLoggerOpen? <LoggerModal setIsLoggerOpen={setIsLoggerOpen}/> : null}
    {getModalActive? <ModalEdit/> : null}
      <div className={appContainer}>
        <div className={board}>
          <BoardList 
            activeBoardId={activeBoardId}
            setActiveBoardId={setActiveBoardId}
          />
        </div>
        <div className={board}>
          <ListsContainer boardId={activeBoardId} lists={activeBoard.lists}/>
        </div>
        <div className = {buttonContainer}>
          <button className = {button}
          onClick={() => {
            dispatch(handleDelete)
            dispatch(createLog({
              logMessage: `게시판 ${activeBoard.boardName} 삭제`,
              logDate: new Date().toLocaleString().split('.')[0],
              logAuthor: 'admin',
              logId: v4()
            }))
            }}>이 게시판 삭제하기</button>
          <button className = {button} onClick={() => setIsLoggerOpen(true)}>Log</button>
        </div>
      </div>
    </>
  )
}

export default App
