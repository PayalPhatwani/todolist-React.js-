//reducer
 export const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const newTodoList = [...state.todoList, action.payload];
    return {
      ...state,
      todoList: newTodoList,
    };
  }
  if (action.type === "REMOVE_TODO") {
    const updateTodoList = state.todoList.filter(
      (todo) => todo.id !== action.payload
    );
    return {
      ...state,
      todoList: updateTodoList,
    };
  }
  if (action.type === "TODO_DONE") {
    const updateTodoList = state.todoList.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, done: true };
      } else {
        return todo;
      }
    });
    return {
      ...state,
      todoList: updateTodoList,
    };
  }
  if (action.type === "NOT_DONE") {
    const updateTodoList2 = state.todoList.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, done: false };
      } else {
        return todo;
      }
    });
    return {
      ...state,
      todoList: updateTodoList2,
    };
  }
};
