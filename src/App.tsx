import { appContainer , board, button} from './App.css.ts'
import './App.css'
import BoardList from './components/BoardList/BoardList.tsx'
import {useState} from 'react'
import { useTypedSelector } from './hooks/redux'
import ListsContainer from './components/ListsContainer/ListsContainer.tsx'

function App() {
  const [activeBoardId, setActiveBoardId] = useState<string>('board-0')
  const activeBoard = useTypedSelector(state => state.board.boardArray.filter(board => board.boardId === activeBoardId)[0])

  return (
    <>
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
        <div className = {button}>
          <button>이 게시판 삭제하기</button>
          <button>이 게시판 수정하기</button>
        </div>
      </div>
    </>
  )
}

export default App
