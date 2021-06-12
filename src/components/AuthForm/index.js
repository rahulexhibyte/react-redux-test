import { Button, Form, Input } from "antd";

const AuthForm = (props) => {
  const { isSignIn } = props;
  const type = isSignIn ? "Sign In" : "Sign Up";
  return (
    <>
      <div className="text-2xl font-bold text-center">{type}</div>
      <div className="w-1/4 m-auto p-10">
        <Form layout="vertical">
          <Form.Item label="Email Address" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          htmlType="submit"
          href={isSignIn ? "/todo" : "/auth/signin"}
        >
          {type}
        </Button>
      </div>
    </>
  );
};

export default AuthForm;
