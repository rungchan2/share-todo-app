import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TboardState = {
    modalActive: boolean;
    boardArray: IBoard[];
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
    ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
