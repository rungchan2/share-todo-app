import { combineReducers } from "@reduxjs/toolkit";
import { boardReducer } from "../slices/boardSlice";
import { modalReducer } from "../slices/modalSlice";
import { loggerReducer } from "../slices/loggerSlice";

const reducer = combineReducers({
    board: boardReducer,
    modal: modalReducer,
    logger: loggerReducer,
});

export default reducer;