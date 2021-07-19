import React, { createContext, useContext, useReducer } from 'react';

const initTodoState = {
  contents: null,
};

// context
const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

// reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'REFRESH':
      return {
        ...state,
        contents: action.contents,
      };
    default:
      return initTodoState;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initTodoState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoStateContext() {
  const state = useContext(TodoStateContext);
  if (!state) throw Error('cannot find TodoStateContext');
  return state;
}

export function useTodoDispatchContext() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw Error('cannot find TodoDispatchContext');
  return dispatch;
}