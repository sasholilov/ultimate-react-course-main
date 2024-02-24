import React from "react";

function TodoContent({ state, dispatch }) {
  return (
    <>
      {state.length > 1 ? (
        <div className="item">
          {state
            .filter((s, i) => s.status == "pending")
            .map((todo, index) => (
              <>
                <p>{todo.subject}</p>
                <button
                  onClick={() => dispatch({ type: "action", payload: index })}
                >
                  Action
                </button>
              </>
            ))}
        </div>
      ) : (
        <p>Nothing to do</p>
      )}
    </>
  );
}

export default TodoContent;
