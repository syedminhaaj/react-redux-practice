import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearEditingTodo, updateTodo } from "../feature/toDoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const editingTodo = useSelector((state) => state.editingTodo);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editingTodo) {
      // Dispatch addTodo action which will handle update internally
      dispatch(updateTodo({ id: editingTodo.id, text: input }));
      dispatch(clearEditingTodo()); // Clear editing state after update
    } else {
      dispatch(addTodo(input)); // Add new todo
    }
    setInput("");
  };

  useEffect(() => {
    console.log("EditingTodo:====>", editingTodo);
    if (editingTodo) {
      setInput(editingTodo.text); // Set input to the text of the todo being edited
    } else {
      setInput(""); // Clear input if no todo is being edited
    }
  }, [editingTodo]);

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{editingTodo ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default AddTodo;
