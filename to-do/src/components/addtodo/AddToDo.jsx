import { useRef } from "react";

function AddToDo({ dispatch }) {
  const subjectValue = useRef("");

  function handleAdd() {
    dispatch({ type: "add", payload: subjectValue.current.value });
    subjectValue.current.value = "";
  }

  return (
    <div>
      <input type="text" placeholder="Add ToDo" ref={subjectValue} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddToDo;
