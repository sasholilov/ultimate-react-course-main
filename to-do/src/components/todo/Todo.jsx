import "./Todo.css";
import TodoContent from "./TodoContent";

function Todo({ state, dispatch }) {
  console.log("cl from Todo", state);
  return (
    <div className="list-block">
      <h3>Todo / X</h3>
      <TodoContent state={state} dispatch={dispatch} />
    </div>
  );
}

export default Todo;
