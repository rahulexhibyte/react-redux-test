import { Button, PageHeader } from "antd";
import ToDoFormModal from "../../components/TodoFormModal";
import ToDoList from "../../components/ToDoList";
import { modalShow } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.userEmail);
  return (
    <>
      <PageHeader
        title="Dashboard"
        extra={[
          <Button type="primary" onClick={() => dispatch(modalShow())}>
            Add ToDo
          </Button>,
          <span className="font-bold"> {email}</span>,
        ]}
      />
      <ToDoFormModal title="Add ToDo"></ToDoFormModal>
      <ToDoList></ToDoList>
    </>
  );
};
export default Dashboard;
