import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, editModal } from "../../actions";

const TodoItem = (props) => {
  const { id, description, randomColors } = props;
  const dispatch = useDispatch();

  const deleteTodos = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div
        className={`p-5 h-40 bg-${randomColors}-500 bg-opacity-70 w-1/6 m-5 rounded-2xl`}
      >
        <div className="text-right font-bold">
          <Tooltip title="Edit Description">
            <span
              className="cursor-pointer mx-3"
              onClick={() => dispatch(editModal(id))}
            >
              Edit
            </span>
          </Tooltip>

          <Tooltip title="Delete Description">
            <span className="cursor-pointer mx-3" onClick={deleteTodos}>
              Delete
            </span>
          </Tooltip>
        </div>
        <span className="font-bold">{description}</span>
      </div>
    </>
  );
};

export default TodoItem;
