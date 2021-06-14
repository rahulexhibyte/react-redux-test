import { Input, Modal, Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, addTodo, editTodo } from "../../actions";
const { TextArea } = Input;

const ToDoFormModal = (props) => {
  const { title } = props;
  const [form] = Form.useForm();
  const { todos, isModalShow, isEditMode, editTodoId } = useSelector(
    (state) => state
  );
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
                isEditMode
                  ? dispatch(
                      editTodo(
                        todos[
                          todos.findIndex((item) => item.id === editTodoId)
                        ],
                        todoItem
                      )
                    )
                  : dispatch(addTodo(todoItem));
                form.resetFields();
                closeModal();
              });
            }}
          >
            {isEditMode ? "Edit ToDo" : "Add ToDo"}
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
