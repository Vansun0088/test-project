import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLoginMutation } from "../../services/auth";
import Card from "antd/es/card/Card";
import { useNavigate } from "react-router-dom";
import Layout from 'antd/es/layout/layout';
import React from "react";

type AuthPayload = {
    email: string
    password: string
}

export const Login = () => {
    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation()

    const onFinish = async (values: AuthPayload) => {
        login(values).then(() => {
            navigate('/');
        })
    };

    return (
        <Layout style={layoutStyle}>
            <Card style={formCardStyle}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        initialValue={'dev@maverickmedia.test'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        initialValue={'password'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    );
};

const layoutStyle: React.CSSProperties = {
    padding: 20,
    height: '100vh',
    alignItems: "center",
    display: 'flex',
    justifyContent: "center",
}

const formCardStyle: React.CSSProperties = { width: 300 }
