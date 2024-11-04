import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
import { useTypedSelector, useTypedDispatch } from "../hooks/redux";
const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const logger = useTypedSelector((state) => state.logger);

store.getState();

export default store;