import { createSlice } from "@reduxjs/toolkit";
import { ILogItem } from "../../types";
import { PayloadAction } from "@reduxjs/toolkit";

type TLoggerState = {
    logArray: ILogItem[];
};

const initialState: TLoggerState = {
    logArray: [{
        logId: "1",
        logAuthor: "admin",
        logMessage: "게시판 생성",
        logDate: "2024-01-01",
    }],
};

const loggerSlice = createSlice({
    name : "logger",
    initialState,
    reducers : {
        createLog: (state, {payload}: PayloadAction<ILogItem>) => {
            state.logArray.push(payload)
        },
    },
});

export const { createLog } = loggerSlice.actions
export const loggerReducer = loggerSlice.reducer;
