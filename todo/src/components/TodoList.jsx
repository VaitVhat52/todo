import React from "react";
import Todo from "./Todo";

const listItems = [
  {
    id: 1,
    text: "Hola",
    checked: false,
  },
  {
    id: 2,
    text: "Hello",
    checked: false,
  },
  {
    id: 3,
    text: "Whats Up",
    checked: false,
  },
  {
    id: 4,
    text: "Hows it Goin",
    checked: false,
  },
  {
    id: 5,
    text: "What you doing later",
    checked: false,
  },
];

const TodoList = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div>
      <form className="flex gap-1 justify-center mt-10" onSubmit={handleSubmit}>
        <input className="input-ghost-primary input" placeholder="Todo..." />
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
