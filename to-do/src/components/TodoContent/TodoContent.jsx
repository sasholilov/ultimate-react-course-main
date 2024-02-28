import React from "react";

function TodoContent({ state, dispatch, status, type, buttonText, children }) {
  const isHasStatus = state.some((element) => element.status === status);

  return (
    <>
      {state.length > 1 && isHasStatus ? (
        <div className="item">
          {state
            .map((todo, index) => (
              <>
                {todo.status === status && (
                  <>
                    <p>{todo.subject}</p>
                    <button
                      onClick={() => dispatch({ type: type, payload: index })}
                    >
                      {buttonText}
                    </button>
                  </>
                )}
              </>
            ))
            .filter((s, i) => i > 0)}
        </div>
      ) : (
        <p>{children}</p>
      )}
    </>
  );
}

export default TodoContent;
