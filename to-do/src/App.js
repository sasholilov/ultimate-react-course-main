import "./App.css";
import Todo from "./components/todo/Todo";
import InProgress from "./components/inprogress/InProgress";
import Done from "./components/done/Done";
import AddToDo from "./components/addtodo/AddToDo";
import { useReducer } from "react";
const initialState = [
  {
    subject: "",
    status: "",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { subject: action.payload, status: "pending" }];
    case "action":
      const newState = [...state];
      newState[action.payload].status = "progress";
      return newState;
    case "progress":
      const newStatePr = [...state];
      newStatePr[action.payload].status = "done";
      return newStatePr;
    case "done":
      const newStateDn = [...state];
      newStateDn[action.payload].status = "deleted";
      return newStateDn;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="container">
      <AddToDo dispatch={dispatch} />
      <div className="boxes">
        <Todo state={state} dispatch={dispatch} />
        <InProgress state={state} dispatch={dispatch} />
        <Done state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
