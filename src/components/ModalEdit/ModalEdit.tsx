import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedSelector } from "../../hooks/redux";
import { useTypedDispatch } from "../../hooks/redux";
import {
  setModalActive,
  deleteTask,
  updateTask,
} from "../../store/slices/boardSlice";
import { createLog } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";
import {
  modalEdit,
  modalEditHeader,
  modalEditTitle,
  modalEditForm,
  modalEditLabel,
  modalEditInput,
  modalEditButton,
  modalDeleteButton,
  modalBackground,
  modalCloseButton,
} from "./ModalEdit.css";

const ModalEdit = () => {
  const editingState = useTypedSelector((state) => state.modal);
  const [data, setData] = useState(editingState);
  const dispatch = useTypedDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, taskName: e.target.value } });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: { ...data.task, taskDescription: e.target.value },
    });
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, taskOwner: e.target.value } });
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        taskId: data.task.taskId,
        boardId: data.boardId,
        listId: data.listId,
      })
    );
    dispatch(
      createLog({
        logId: v4(),
        logAuthor: data.task.taskOwner,
        logMessage: "delete",
        logDate: new Date().toISOString().split('.')[0],
      })
    );
    dispatch(setModalActive(false));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: data.boardId,
        listId: data.listId,
        task: data.task,
      })
    );
    dispatch(
      createLog({
        logId: v4(),
        logAuthor: data.task.taskOwner,
        logMessage: "update",
        logDate: new Date().toISOString().split('.')[0],
      })
    );
    dispatch(setModalActive(false));
  };
  return (
    <div className={modalBackground}>
      <div className={modalEdit}>
        <div className={modalEditHeader}>
          <h1 className={modalEditTitle}>게시판 수정</h1>
          <FiX onClick={() => dispatch(setModalActive(false))} className={modalCloseButton} />
        </div>
        <form className={modalEditForm}>
          <label htmlFor="taskName" className={modalEditLabel}>
            제목
          </label>
          <input
            type="text"
            id="taskName"
            placeholder="제목"
            value={data.task.taskName}
            onChange={handleNameChange}
            className={modalEditInput}
          />
          <label htmlFor="taskDescription" className={modalEditLabel}>
            설명
          </label>
          <input
            type="text"
            id="taskDescription"
            placeholder="설명"
            value={data.task.taskDescription}
            onChange={handleDescriptionChange}
            className={modalEditInput}
          />
          <label htmlFor="taskAuthor" className={modalEditLabel}>
            작성자
          </label>
          <input
            type="text"
            id="taskAuthor"
            placeholder="작성자"
            value={data.task.taskOwner}
            onChange={handleAuthorChange}
            className={modalEditInput}
          />
          <div>
            <button
              type="submit"
              onMouseDown={handleUpdate}
              className={modalEditButton}
            >
              수정
            </button>
            <button
              type="button"
              onMouseDown={handleDelete}
              className={modalDeleteButton}
            >
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
