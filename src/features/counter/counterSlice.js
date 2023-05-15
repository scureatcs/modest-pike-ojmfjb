import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, { payload: description }) => {
      state.todos.push({
        id: state.todos.length,
        description,
        isCompleted: false,
      });
    },
    remove: (state, { payload: id }) => {
      return { todos: [...state.todos.filter((todo) => todo.id !== id)] };
    },
    markCompleted: (state, { payload: id }) => {
      const todo = state.todos.find((todo) => todo.id === id);
      todo.isCompleted = !!!todo.isCompleted;
    },
  },
});

export const { add, remove, markCompleted } = todosSlice.actions;

export const addWithMessage = (todo) => (dispatch) => {
  dispatch(add(todo));
  toast("Added todo!");
};

export const removeWithMessage = (id) => (dispatch) => {
  dispatch(remove(id));
  toast("Removed todo!");
};

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
