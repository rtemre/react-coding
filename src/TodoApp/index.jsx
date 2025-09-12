import React, { useState } from "react";
import "./style.css";

function TodoApp() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const handleSubmit = () => {
    if (editingId !== null) {
      const updateList = [...todoList];
      const index = updateList.findIndex((item) => item.id === editingId);
      updateList[index] = { ...updateList[index], textInput };
      setTodoList(updateList);
      setEditingId(null);
    } else {
      const updateList = [...todoList];
      updateList.push({ id: Date.now(), textInput });
      setTodoList(updateList);
    }
    setTextInput("");
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setTextInput(item.textInput);
  };

  const handleDelete = (item) => {
    const updateList = [...todoList];
    const filtered = updateList.filter((text) => text.id !== item.id);
    setTodoList(filtered);
    if (editingId === item.id) {
      setEditingId(null);
      setTextInput("");
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="todo-form"
      >
        <label htmlFor="textInput" style={{ display: "none" }}>
          Todo Text
        </label>
        <input
          id="textInput"
          type="text"
          name="textInput"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter a todo item"
          className="todo-input"
        />
        <button
          type="submit"
          className={`todo-button ${editingId !== null ? "update" : "add"}`}
        >
          {editingId !== null ? "Update" : "Add"}
        </button>
      </form>

      <div>
        <ul className="todo-list">
          {todoList.map((item) => (
            <li key={item.id} className="todo-item">
              <span className="todo-text">{item.textInput}</span>
              <div className="action-buttons">
                <button
                  onClick={() => handleEdit(item)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
