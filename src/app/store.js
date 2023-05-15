import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/counter/counterSlice";

export default configureStore({ reducer: todosReducer });
