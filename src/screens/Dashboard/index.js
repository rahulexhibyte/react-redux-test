import { Button, PageHeader } from "antd";
import ToDoFormModal from "../../components/TodoFormModal";
import ToDoList from "../../components/ToDoList";
import { modalShow } from "../../actions";
import { useDispatch } from "react-redux";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <PageHeader
        title="Dashboard"
        extra={[
          <Button type="primary" onClick={() => dispatch(modalShow())}>
            Add ToDo
          </Button>,
        ]}
      />
      <ToDoFormModal title="Add ToDo"></ToDoFormModal>
      <ToDoList></ToDoList>
    </>
  );
};
export default Dashboard;
