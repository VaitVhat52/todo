import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [listItems, setListItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  const [todoInput, setTodoInput] = useState("");
  const numTodos = listItems.length;
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(listItems));
  }, [listItems]);

  function handleSubmit(e) {
    e.preventDefault();

    if (todoInput === "") return;

    setListItems((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), text: todoInput, completed: false },
      ];
    });

    setTodoInput("");
  }

  function handleChange(e) {
    setTodoInput(e.target.value);
  }

  function handleReset() {
    setListItems([]);
  }

  return (
    <div>
      <form
        className="todoForm flex gap-1 justify-center mt-10"
        onSubmit={handleSubmit}
      >
        <input
          className="todoInput input-ghost-primary input"
          placeholder="To Do..."
          value={todoInput}
          onChange={handleChange}
        />
        <span className="flex gap-1">
          <button className="btn btn-outline-primary">Submit</button>
          {numTodos > 0 && (
            <button className="btn btn-outline-error" onClick={handleReset}>
              Reset
            </button>
          )}
        </span>
      </form>
      {numTodos < 1 && <p className="text-center mt-10 text-2xl">No To-Do's</p>}
      {listItems.map((listItem) => (
        <Todo
          text={listItem.text}
          key={listItem.id}
          id={listItem.id}
          listItems={listItems}
          setListItems={setListItems}
        />
      ))}
    </div>
  );
};

export default TodoList;
