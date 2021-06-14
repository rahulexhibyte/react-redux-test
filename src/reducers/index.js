import constants from "../constants";

const initState = {
  todos: [],
  isProgress: false,
  isSignin: false,
  isError: false,
  error: null,
  user: {
    userEmail: null,
  },
  isModalShow: false,
  isEditMode: false,
  editTodoId: -1,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case constants.SIGNIN_PROGRESS:
    case constants.SIGNUP_PROGRESS:
    case constants.PROGRESS:
      return { ...state, isProgress: true };

    case constants.SIGNIN:
      return {
        ...state,
        isProgress: false,
        isSignin: true,
        error: null,
      };

    case constants.ADD_TODO:
      return { todos: [...state.todos, action.todoItem] };

    case constants.DELETE_TODO:
      console.log(action.todoId);
      const filteredToDos = state.todos.filter(
        (todoItem) => todoItem.id !== action.todoId
      );
      return {
        todos: filteredToDos,
        ...state,
      };
    case constants.EDIT_TODO:
      console.log(action.todoItem, action.newItem);
      const editedTodos = Object.assign(state.todos);
      const id = editedTodos.findIndex(
        (item) => item.id === action.todoItem.id
      );
      editedTodos[id].description = action.newItem.description;
      return {
        todos: editedTodos,
        ...state,
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
        isEditMode: false,
        editTodoId: -1,
      };

    case constants.EDIT_MODE:
      return {
        ...state,
        isModalShow: true,
        isEditMode: true,
        editTodoId: action.todoId,
      };

    case "HELLO":
      console.log("Hey World");
      return state;
    default:
      return state;
  }
};
export default reducers;
