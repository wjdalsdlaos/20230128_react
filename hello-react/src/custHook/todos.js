import { createContext, useContext, useReducer } from "react";

function todos_reducer(state, action) {
  //console.log(state, action);
  //return [...state, { id: 4, text: "테스트", done: false }];
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useReducer 배우기", done: false },
  { id: 3, text: "useCallback 배우기", done: false },
];

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todos_reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Provider를 찾을 수 없습니다.");
  }
  return context;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  return dispatch;
}
