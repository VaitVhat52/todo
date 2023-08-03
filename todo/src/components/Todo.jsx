import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Todo = (props) => {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!checked);
    console.log("Checked");
  }

  return (
    <div className="flex justify-between mt-10 mx-[35%] gap-5">
      <label className="flex cursor-pointer gap-2 align-middle">
        <input type="checkbox" className="checkbox" onChange={handleCheck} />
      </label>
      <span className={checked ? "selected" : ""}>{props.text}</span>
      <button className="align-left bg-red-600 p-1 rounded-md">
        <RxCross1 />
      </button>
    </div>
  );
};

export default Todo;
