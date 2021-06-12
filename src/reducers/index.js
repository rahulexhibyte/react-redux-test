import constants from "../constants";

const initState = {
  todos: [],
  isModalShow: false,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return { todos: [...state.todos, action.todoItem] };

    case constants.DELETE_TODO:
      console.log(action.todoId);
      const filteredToDos = state.todos.filter(
        (todoItem) => todoItem.id !== action.todoId
      );
      return {
        todos: filteredToDos,
      };
    case constants.EDIT_TODO:
      const editedTodos = Object.assign(state.todos);
      const id = editedTodos.findIndex((item) => item.id === action.todoItem);
      editedTodos[id].description = action.newItem.description;
      return {
        todos: editedTodos,
      };

    case constants.MODAL_SHOW:
      return {
        ...state,
        isModalShow: true,
      };
    case constants.MODAL_CLOSE:
      return {
        ...state,
        isModalShow: false,
      };

    case "HELLO":
      console.log("Hey World");
      return state;
    default:
      return state;
  }
};
export default reducers;
