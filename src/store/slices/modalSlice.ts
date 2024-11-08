import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types/types";

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TChangeTaskAction = {
  boardId: string;
  listId: string;
  taskId?: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task name",
    taskDescription: "this is a task",
    taskOwner: "john doe",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, {payload}: PayloadAction<TChangeTaskAction>) => {
      state.boardId = payload.boardId
      state.listId = payload.listId
      state.task = payload.task
    },
    
  },
});

export const { setModalData } = modalSlice.actions
export const modalReducer = modalSlice.reducer;
