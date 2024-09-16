import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hi world" }],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log("action", action);
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text; // Update the todo's text
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    editingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    clearEditingTodo: (state, action) => {
      state.editingTodo = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editingTodo,
  clearEditingTodo,
  updateTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
