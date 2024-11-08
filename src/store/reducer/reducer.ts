import { combineReducers } from "@reduxjs/toolkit";
import { boardReducer } from "../slices/boardSlice";
import { modalReducer } from "../slices/modalSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { userReducer } from "../slices/userSlice";
const reducer = combineReducers({
    board: boardReducer,
    modal: modalReducer,
    logger: loggerReducer,
    user: userReducer
});

export default reducer;