import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Todo = (props) => {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!checked);
    console.log("Checked");
  }

  function handleDelete(id) {
    const newList = props.listItems.filter((l) => l.id !== id);
    props.setListItems(newList);
  }

  return (
    <div className="flex justify-between mt-10 mx-[35%] gap-5">
      <label className="flex cursor-pointer gap-2 align-middle">
        <input type="checkbox" className="checkbox" onChange={handleCheck} />
      </label>
      <span className={checked ? "selected" : ""}>{props.text}</span>
      <button
        className="delete align-left bg-red-600 p-1 rounded-md"
        onClick={() => handleDelete(props.id)}
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default Todo;
