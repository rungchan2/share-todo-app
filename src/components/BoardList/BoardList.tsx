import React from 'react'
import {FC} from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { useState,useRef } from 'react'
import SideForm from './SideForm'
import { FiPlusCircle } from 'react-icons/fi'
import { addButton, addSection, boardActiveItem, boardItem, container, title } from './BoardList.css'
import clsx from 'clsx'
import { GoSignOut, GoSignIn } from 'react-icons/go'
import { logoutButton } from './BoardList.css'
import { getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase'
import { login } from '../../store/slices/userSlice'
import { useTypedDispatch } from '../../hooks/redux'
import { provider } from '../../firebase'
import { useAuth } from '../../hooks/useAuth'

type TBoardListProps = {
    activeBoardId: string
    setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

const BoardList:FC<TBoardListProps> = ({
  activeBoardId, 
  setActiveBoardId
}) => {
  const dispatch = useTypedDispatch()
  const {boardArray, } = useTypedSelector(state => state.board)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {isAuth, email} = useAuth()

  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then((userCredential) => {
      console.log(userCredential)
      dispatch(login(
        {
          email: userCredential.user.email,
          id: userCredential.user.uid
        }
      ))
    })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    })
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(login({
        email: '',
        id: ''
      }))
    }).catch((error) => {
      console.log(error)
      alert(error.message)
    })
  }

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0) // input form에서 autofocus 를 사용해서도 쉽게 가능.

  }

  return (
    <div className={container}>
      <div className={title}>
        게시판: 
      </div>

      {boardArray.map((board, index) => (
        <div key={board.boardId} onClick={() => setActiveBoardId(boardArray[index].boardId)} className={
          clsx({
            [boardActiveItem]: boardArray.findIndex(b => b.boardId === activeBoardId) === index, 
            [boardItem]: boardArray.findIndex(b => b.boardId === activeBoardId) !== index 
          })
        }>
          <div>{board.boardName}</div>
        </div>
      ))}
      

      <div className={addSection}>
      <p style={{color: 'white', fontSize: '12px', marginRight: '10px'}}>{email}</p>
        {
          isFormOpen ? (
            <SideForm inputRef={inputRef} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
          ) : (
            <FiPlusCircle className={addButton} onClick={handleClick}/>
          )
        }
      </div>
      {
        isAuth ? (
          <GoSignOut className={logoutButton} onClick={handleLogout}/>
        ) : (
          <GoSignIn className={logoutButton} onClick={handleLogin}/>
        )
      }
    </div>
    
  )
}

export default BoardList