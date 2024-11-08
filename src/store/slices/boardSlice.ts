import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, ITask, IList } from "../../types/types";

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

type TDeleteTaskAction = {
  taskId: string;
  boardId: string;
  listId: string;
};

type TUpdateTaskAction = {
  task: ITask;
  boardId: string;
  listId: string;
};

type TSortTaskAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
}

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
    deleteBoard : (state, { payload }: PayloadAction<string>) => {
      if (state.boardArray.length > 1) {
        state.boardArray = state.boardArray.filter((board) => board.boardId !== payload);
      } else {
        alert("게시판은 최소 하나 이상 존재해야 합니다.")
      }
    },
    deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map((b) =>
        b.boardId === payload.boardId
          ? {
              ...b,
              lists: b.lists.map((l) =>
                l.listId === payload.listId
                  ? {
                      ...l,
                      tasks: l.tasks.filter((t) => t.taskId !== payload.taskId),
                    }
                  : l
              ),
            }
          : b
      );
    },
    updateTask: (state, { payload }: PayloadAction<TUpdateTaskAction>) => {
      state.boardArray = state.boardArray.map((b) =>
        b.boardId === payload.boardId
          ? {
              ...b,
              lists: b.lists.map((l) =>
                l.listId === payload.listId
                  ? {
                      ...l,
                      tasks: l.tasks.map((t) =>
                        t.taskId === payload.task.taskId ? payload.task : t
                      ),
                    }
                  : l
              ),
            }
          : b
      );
    },
    sortTask: (state, { payload }: PayloadAction<TSortTaskAction>) => {
      if (payload.droppableIdStart === payload.droppableIdEnd) {
        const list = state.boardArray[payload.boardIndex].lists.filter(list => list.listId === payload.droppableIdStart)[0]

        const deletedTaskArray = list.tasks.splice(payload.droppableIndexStart, 1)
        list?.tasks.splice(payload.droppableIndexEnd, 0, ...deletedTaskArray)

      } else {
        const listStart = state.boardArray[payload.boardIndex].lists.find(list => list.listId === payload.droppableIdStart)
        const listEnd = state.boardArray[payload.boardIndex].lists.find(list => list.listId === payload.droppableIdEnd)

        const deletedTaskArray = listStart!.tasks.splice(payload.droppableIndexStart, 1)
        listEnd!.tasks.splice(payload.droppableIndexEnd, 0, ...deletedTaskArray)
      }
    }
  },
});

export const {
  createBoard,
  deleteList,
  setModalActive,
  createList,
  createTask,
  deleteTask,
  updateTask,
  deleteBoard,
  sortTask,
} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
