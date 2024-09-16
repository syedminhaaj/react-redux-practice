import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/toDoSlice";
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: todoReducer,
  devTools: true,
  //   enhancers: [composeWithDevTools()],
});
