import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../constants";

const AuthForm = (props) => {
  const { isSignIn } = props;

  const isProgress = useSelector((state) => state.isProgress);
  const dispatch = useDispatch();

  const type = isSignIn ? "Sign In" : "Sign Up";

  const onFinishHandler = (values) => {
    console.log(values);
    dispatch({
      type: isSignIn ? constants.SIGNIN : constants.SIGNUP,
      value: values,
    });
  };
  return (
    <>
      <div className="text-2xl font-bold text-center">{type}</div>
      <div className="w-1/4 m-auto p-10">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <Form.Item label="Email Address" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isProgress ? true : false}
            // href={isSignIn ? "/todo" : "/auth/signin"}
          >
            {type}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AuthForm;
