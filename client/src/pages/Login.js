
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async(values) => {
        try {
            const user = await axios.post('api/user/login', values)
            message.success('Login Successful')
            localStorage.setItem('ppcm-resume-users', JSON.stringify(user.data))
            navigate('/home')
        } catch (error) {
            message.error('Login failed')
        }
    };

    return (
        <div className="auth-parent">
      {loading && <Spin size="large"/>}
      <h1 className="brand"></h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
    );
}

export default Register