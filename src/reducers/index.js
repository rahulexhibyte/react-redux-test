import constants from "../constants";
const initState = {
  todos: [],
  isSuccess: false,
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
      return { ...state, isProgress: true, isError: false, error: null };

    case constants.SIGNIN_SUCESS:
      return {
        ...state,
        isSuccess: false,
        isSignin: true,
        user: { userEmail: action.email },
        isProgress: false,
        isError: false,
        error: null,
      };
    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isSignin: false,
        user: { userEmail: action.email },
        isProgress: false,
        isError: false,
        error: null,
      };

    case constants.SIGNIN_FAILED:
    case constants.SIGNUP_FAILED:
      console.log(34, action.error);
      return {
        ...state,
        isProgress: false,
        isSuccess: false,
        isError: true,
        error: action.error.message,
      };

    case constants.ADD_TODO:
      return { ...state, todos: [...state.todos, action.todoItem] };

    case constants.DELETE_TODO:
      console.log(action.todoId);
      const filteredToDos = state.todos.filter(
        (todoItem) => todoItem.id !== action.todoId
      );
      return {
        ...state,
        todos: filteredToDos,
      };

    case constants.EDIT_TODO:
      console.log(action.todoItem, action.newItem);
      const editedTodos = Object.assign(state.todos);
      const id = editedTodos.findIndex(
        (item) => item.id === action.todoItem.id
      );
      editedTodos[id].description = action.newItem.description;
      return {
        ...state,
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
