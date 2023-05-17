import {Button, Checkbox, Form, Input} from "antd";
import "./Login.css";
import UserStore from "../store/UserStore";
import {Navigate, useNavigate} from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        const userSession = UserStore.loginUser({login: values.username, password: values.password})
        if (userSession) {
            console.log('here')
            navigate("/")
            return
        }
        window.alert("User with given credentials is not found!")
    };

    return(
        <Form
            name="basic"
            className="centered-div"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}