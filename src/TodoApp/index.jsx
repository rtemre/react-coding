import React, { useState } from "react";

function TodoApp() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = () => {
    const updateList = [...todoList];
    updateList.push({ id: todoList.length + 1, textInput });
    setTodoList(updateList);
  };

  const handleEdit = (item) => {
    const updateList = [...todoList];
    const findIndex = updateList.findIndex((idx) => idx);
    updateList[findIndex] = { ...item, textInput: textInput };
    setTodoList(updateList);
  };

  const handleDelete = (item) => {
    const updateText = [...todoList];
    const findText = updateText.filter((text) => text.id === item.id);
    setTodoList(findText);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="textInput">Todo Text</label>
        <input
          id="textInput"
          type="text"
          name="textInput"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        <ul>
          {todoList.map((item) => (
            <li
              key={item}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {item.textInput}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span onClick={() => handleEdit(item)}>Edit</span>
                <span onClick={() => handleDelete(item)}>Delete</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
