import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, ITask, IList } from "../../types";

type TboardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TCreateBoardAction = {
  board: IBoard;
};

type TDeleteListAction = {
  listId: string;
  boardId: string;
};

type TCreateListAction = {
  list: IList;
  boardId: string;
};

type TCreateTaskAction = {
  task: ITask;
  boardId: string;
  listId: string;
};

const initialState: TboardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "board name",
      lists: [
        {
          listId: "list-0",
          listName: "list name",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task name",
              taskDescription: "task description",
              taskOwner: "task owner",
            },
            {
              taskId: "task-1",
              taskName: "task name",
              taskDescription: "task description",
              taskOwner: "task owner",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list name",
          tasks: [
            {
              taskId: "task-2",
              taskName: "task name",
              taskDescription: "task description",
              taskOwner: "task owner",
            },
          ],
        },
      ],
    },
    {
      boardId: "board-1",
      boardName: "board name",
      lists: [],
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state, { payload }: PayloadAction<TCreateBoardAction>) => {
      state.boardArray.push(payload.board);
    },
    deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(
                (list) => list.listId !== payload.listId
              ),
            }
          : board
      );
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
    createList: (state, { payload }: PayloadAction<TCreateListAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? { ...board, lists: board.lists.push(payload.list) }
          : board
      );
    },
    createTask: (state, { payload }: PayloadAction<TCreateTaskAction>) => {
      state.boardArray.map((b) =>
        b.boardId === payload.boardId
          ? {
              ...b,
              lists: b.lists.map((l) =>
                l.listId === payload.listId
                  ? { ...l, tasks: l.tasks.push(payload.task) }
                  : l
              ),
            }
          : b
      );
    },
  },
});

export const {
  createBoard,
  deleteList,
  setModalActive,
  createList,
  createTask,
} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
