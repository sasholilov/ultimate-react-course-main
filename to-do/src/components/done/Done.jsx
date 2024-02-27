import "./Done.css";
import TodoContent from "../TodoContent/TodoContent";

function Done({ state, dispatch }) {
  const qty = state.filter((el) => el.status === "done").length;
  return (
    <div className="list-block-done">
      <h3>Done / {qty}</h3>
      <TodoContent
        state={state}
        status="done"
        type="done"
        dispatch={dispatch}
        buttonText="Hide"
      />
    </div>
  );
}
export default Done;
