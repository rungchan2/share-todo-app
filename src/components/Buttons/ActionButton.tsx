import { useState } from "react";
import DropDownForm from "../DropDownForm/DropDownForm";
import { listButton, taskButton } from "./ActionButton.css.ts";
type TActionButtonProps = {
  boardId: string
  listId: string
  list?: boolean
}

const ActionButton = ({boardId, listId, list}: TActionButtonProps) => {

  const [isFormActive, setIsFormActive] = useState(false)

  const buttonText = list ? "+ 새로운 리스트 등록" : "+ 새로운 일 등록"


  return isFormActive ? (
    <div>
      <DropDownForm 
        list={list ? true : false} 
        listId={listId} 
        boardId={boardId}
        setIsFormActive={setIsFormActive}
      />
    </div>
  ) : (
    <button onClick={() => setIsFormActive(true)}
        className={list ? listButton : taskButton}
      >{buttonText}
      </button>
  );
};

export default ActionButton;