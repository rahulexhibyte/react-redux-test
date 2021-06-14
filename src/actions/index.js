import constants from "../constants";

const progress = () => ({ type: constants.PROGRESS });

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
  addTodo,
  deleteTodo,
  editTodo,
  modalShow,
  modalClose,
  editModal,
};
