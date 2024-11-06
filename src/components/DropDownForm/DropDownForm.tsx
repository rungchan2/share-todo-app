import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks/redux";
import { createList, createTask } from "../../store/slices/boardSlice";
import { v4 } from "uuid";
import { createLog } from "../../store/slices/loggerSlice";
import { container, input, button, closeButton, buttonContainer } from "./DropDownForm.css";
import { FiX } from "react-icons/fi";

type TDropDownFormProps = {
  list: boolean;
  listId: string;
  boardId: string;
  setIsFormActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDownForm = ({
  listId,
  boardId,
  list,
  setIsFormActive,
}: TDropDownFormProps) => {
  const formPlaceHolder = list ? "리스트 이름" : "할 일 내용";
  const buttonText = list ? "리스트 등록" : "일 등록";
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const dispatch = useTypedDispatch();

  const handleSubmit = () => {
    if (text) {
      if (list) {
        dispatch(
          createList({
            boardId,
            list: { listId: v4(), listName: text, tasks: [] },
          })
        );
        dispatch(
          createLog({
            logId: v4(),
            logMessage: `${text} 리스트 생성`,
            logAuthor: "user",
            logDate: new Date().toISOString(),
          })
        );
      } else {
        dispatch(
          createTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDescription: "",
              taskOwner: "user",
            },
          })
        );
        dispatch(
          createLog({
            logId: v4(),
            logMessage: `${text} 할 일 생성`,
            logAuthor: "user",
            logDate: new Date().toISOString(),
          })
        );
      }
    }
  };
  return (
    <div>
      <form className={container}>
        <textarea
          className={input}
          value={text}
          onChange={handleChange}
          autoFocus
          placeholder={formPlaceHolder}
          onBlur={() => setIsFormActive(false)}
        />
        <div className={buttonContainer}>
          <button className={button} type="submit" onMouseDown={handleSubmit}>
            {buttonText}
          </button>
          <FiX className={closeButton} onClick={() => setIsFormActive(false)} />
        </div>
      </form>
    </div>
  );
};

export default DropDownForm;
