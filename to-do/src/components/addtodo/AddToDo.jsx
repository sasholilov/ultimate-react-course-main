import "./AddToDo.css";
import { useRef } from "react";

function AddToDo({ dispatch }) {
  const subjectValue = useRef("");

  function handleAdd() {
    if (subjectValue.current.value == "") return;
    dispatch({ type: "add", payload: subjectValue.current.value });
    subjectValue.current.value = "";
  }

  return (
    <div className="input-bar-wrapper">
      <div className="input-bar">
        <input type="text" placeholder="Add ToDo" ref={subjectValue} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default AddToDo;
