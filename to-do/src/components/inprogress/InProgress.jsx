import "./InProgress.css";
import TodoContent from "../TodoContent/TodoContent";

function InProgress({ state, dispatch }) {
  const qty = state.filter((el) => el.status === "progress").length;
  return (
    <div className="list-block-progress">
      <h3>In Progress / {qty}</h3>
      <TodoContent
        state={state}
        dispatch={dispatch}
        status="progress"
        type="progress"
        buttonText="Done"
      ></TodoContent>
    </div>
  );
}
export default InProgress;
