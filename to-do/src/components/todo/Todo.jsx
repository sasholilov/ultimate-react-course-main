import "./Todo.css";

function Todo({ state, dispatch }) {
  return (
    <div className="list-block">
      <h3>Todo / X</h3>
      {state.length > 1 ? (
        <div className="item">
          {state
            .map((todo, index) => (
              <>
                <p>{todo.subject}</p>
                <button
                  onClick={() => dispatch({ type: "action", payload: index })}
                >
                  Action
                </button>
              </>
            ))
            .filter((s, i) => i > 0)}
        </div>
      ) : (
        <p>Nothing to do</p>
      )}
    </div>
  );
}

export default Todo;
