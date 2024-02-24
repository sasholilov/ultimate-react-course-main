import React from "react";

function TodoContent({ state, dispatch }) {
  return (
    <>
      {state.length > 1 ? (
        <div className="item">
          {state
            .map((todo, index) => (
              <>
                {todo.status === "pending" && (
                  <>
                    <p>{todo.subject}</p>
                    <button
                      onClick={() =>
                        dispatch({ type: "action", payload: index })
                      }
                    >
                      Action
                    </button>
                  </>
                )}
              </>
            ))
            .filter((s, i) => i > 0)}
        </div>
      ) : (
        <p>Nothing to do</p>
      )}
    </>
  );
}

export default TodoContent;
