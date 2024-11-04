import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { TypedUseSelectorHook } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = useDispatch<AppDispatch>();

export { useTypedSelector, useTypedDispatch };
