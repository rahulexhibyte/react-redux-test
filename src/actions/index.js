import constants from "../constants";

const progress = () => ({ type: constants.PROGRESS });

const successSignUp = () => ({ type: constants.SIGNUP_SUCCESS });

const failedSignup = (error) => ({ type: constants.SIGNUP_FAILED, error });

const addTodo = (todoItem) => ({ type: constants.ADD_TODO, todoItem });

const deleteTodo = (todoId) => ({ type: constants.DELETE_TODO, todoId });

const editTodo = (todoItem, newItem) => ({
  type: constants.EDIT_TODO,
  todoItem,
  newItem,
});

const modalShow = () => ({ type: constants.MODAL_SHOW });

const modalClose = () => ({ type: constants.MODAL_CLOSE });

const editModal = (todoId) => ({ type: constants.EDIT_MODE, todoId });

export {
  progress,
  successSignUp,
  failedSignup,
  addTodo,
  deleteTodo,
  editTodo,
  modalShow,
  modalClose,
  editModal,
};
