import { useRef } from "react";

function AddToDo({ dispatch }) {
  const subjectValue = useRef("");

  return (
    <div>
      <input type="text" placeholder="Add ToDo" ref={subjectValue} />
      <button
        onClick={() =>
          dispatch({ type: "add", payload: subjectValue.current.value })
        }
      >
        Add
      </button>
    </div>
  );
}

export default AddToDo;
