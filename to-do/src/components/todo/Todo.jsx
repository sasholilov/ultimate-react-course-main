import "./Todo.css";
import TodoContent from "../TodoContent/TodoContent";

function Todo({ state, dispatch }) {
  const qty = state.filter((el) => el.status === "pending").length;
  return (
    <div className="list-block">
      <h3>Todo / {qty}</h3>
      <TodoContent
        state={state}
        dispatch={dispatch}
        status="pending"
        type="action"
        buttonText="Action"
      />
    </div>
  );
}
export default Todo;
