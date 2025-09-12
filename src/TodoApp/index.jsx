import React, { useState } from "react";
import "./style.css";

function TodoApp() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAdd = () => {
    const updateList = [...todoList];
    updateList.push({ id: Date.now(), textInput });
    setTodoList(updateList);
    setTextInput("");
  };

  const handleEdit = (item) => {
    const updateList = [...todoList];
    const index = updateList.findIndex((todo) => todo.id === item.id);
    updateList[index] = {
      ...updateList[index],
      isEditing: true,
      editText: item.textInput,
    };
    setTodoList(updateList);
  };

  const handleSave = (item) => {
    const updateList = [...todoList];
    const index = updateList.findIndex((todo) => todo.id === item.id);
    updateList[index] = {
      ...updateList[index],
      textInput: updateList[index].editText,
      isEditing: false,
      editText: undefined,
    };
    setTodoList(updateList);
  };

  const handleCancel = (item) => {
    const updateList = [...todoList];
    const index = updateList.findIndex((todo) => todo.id === item.id);
    updateList[index] = {
      ...updateList[index],
      isEditing: false,
      editText: undefined,
    };
    setTodoList(updateList);
  };

  const handleDelete = (item) => {
    const updateList = [...todoList];
    const filtered = updateList.filter((text) => text.id !== item.id);
    setTodoList(filtered);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <div className="todo-form">
        <input
          id="textInput"
          type="text"
          name="textInput"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter a todo item"
          className="todo-input"
        />
        <button type="submit" className="todo-button add" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div>
        <ul className="todo-list">
          {todoList.map((item) => (
            <li key={item.id} className="todo-item">
              {item.isEditing ? (
                <>
                  <input
                    type="text"
                    value={item.editText}
                    onChange={(e) => {
                      const updateList = [...todoList];
                      const index = updateList.findIndex(
                        (todo) => todo.id === item.id
                      );
                      updateList[index] = {
                        ...updateList[index],
                        editText: e.target.value,
                      };
                      setTodoList(updateList);
                    }}
                    className="todo-input"
                  />
                  <div className="action-buttons">
                    <button
                      onClick={() => handleSave(item)}
                      className="save-button"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleCancel(item)}
                      className="cancel-button"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
