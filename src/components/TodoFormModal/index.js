import { Input, Modal, Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, addTodo } from "../../actions";
const { TextArea } = Input;

const ToDoFormModal = (props) => {
  const { title } = props;
  const [form] = Form.useForm();
  const isModalShow = useSelector((state) => state.isModalShow);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalClose());
  };
  return (
    <>
      <Modal
        visible={isModalShow}
        title={title}
        onCancel={closeModal}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              form.validateFields().then((values) => {
                const todoItem = {
                  ...values,
                  id: new Date().getMilliseconds(),
                };
                console.log(todoItem);
                dispatch(addTodo(todoItem));
                form.resetFields();
              });
            }}
          >
            Add ToDo
          </Button>,
          <Button onClick={closeModal}>Cancel</Button>,
        ]}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="description" label="ToDo Description">
            <TextArea rows={3} allowClear></TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ToDoFormModal;
