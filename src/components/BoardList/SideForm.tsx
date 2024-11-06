import React, { useState, FC } from "react";
import { FiCheck, } from "react-icons/fi";
import { container, input, check } from "./SideForm.css";
import { useTypedDispatch } from "../../hooks/redux";
import { createBoard } from "../../store/slices/boardSlice";
import { v4 as uuidv4 } from 'uuid';
import { createLog } from "../../store/slices/loggerSlice";

type TSideFormProps = {
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

const SideForm:FC<TSideFormProps> = ({
  isFormOpen,
  setIsFormOpen,
  // inputRef
}) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useTypedDispatch()


  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault()
    dispatch(createBoard({board: {boardId: uuidv4(), boardName: inputText, lists: []}}))
    dispatch(createLog({logId: uuidv4(), logAuthor: "user", logMessage: `게시판 이름: ${inputText} 생성`, logDate: new Date().toISOString()}))
  }

  return (
    <div className={container}>
      <input type="text" placeholder="게시판 이름" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onBlur= {() => setIsFormOpen(false)}
        // ref= {inputRef}
        autoFocus
        className={input}
      />
      <FiCheck onMouseDown={handleClick} className={check}/>
      {isFormOpen}
    </div>
  );
}

export default SideForm