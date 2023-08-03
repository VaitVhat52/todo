import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [listItems, setListItems] = useState([
    {
      id: Math.random(),
      text: "Hola",
      checked: false,
    },
    {
      id: Math.random(),
      text: "Hello",
      checked: false,
    },
    {
      id: Math.random(),
      text: "Whats Up",
      checked: false,
    },
    {
      id: Math.random(),
      text: "Hows it Goin",
      checked: false,
    },
    {
      id: Math.random(),
      text: "What you doing later",
      checked: false,
    },
  ]);
  const [todoInput, setTodoInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div>
      <form className="flex gap-1 justify-center mt-10" onSubmit={handleSubmit}>
        <input
          className="input-ghost-primary input"
          placeholder="What do you need to do?"
          value={todoInput}
        />
        <span>
          <button className="btn btn-outline-primary">Submit</button>
        </span>
      </form>
      {listItems.map((listItem) => (
        <Todo text={listItem.text} key={listItem.id} />
      ))}
    </div>
  );
};

export default TodoList;
