import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import * as user from '../util/User.jsx';
import { Form, Icon, Input, Button, Checkbox,Row,Col} from 'antd';
const FormItem = Form.Item;
import Result from 'ant-design-pro/es/Result';
import {LoginBanner} from './LoginBanner.jsx'
export  class LoginForm extends React.Component {
    constructor(props){
        super(props);
    }
    handleLoginOut(){
        let { actions,history,location,userData } = this.props;
        actions.loginOut(userData,history,location)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        if(!user.isLogin()){
            return (
                <div id="login-box">
                <Row type="flex">
                    <Col xs={{ span: 24}} lg={{ span: 6, offset:2 }}>
                           <LoginBanner/>
                    </Col>
                    {/* <Col span={8}></Col> */}
                    <Col xs={{ span: 24}} lg={{ span: 6, offset:6 }}>
                        <div className="login-box-form">
                            <Form id="login-form" onSubmit={this.props.handleSubmit} className="login-form">
                                    <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [
                                            { required: true, message: 'Please input your username!' },
                                            { validator:this.props.usernameCheck }
                                        ],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                    </FormItem>
                                    <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            { required: true, message: 'Please input your Password!' },
                                            { validator:this.props.passwordCheck }
                                        ],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                    </FormItem>
                                    <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>Remember me</Checkbox>
                                    )}
                                    <a className="login-form-forgot" href="">Forgot password</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                    </FormItem>
                            </Form>
                        </div>
                    </Col>
                    {/* <Col span={8}></Col> */}
                </Row>
                </div>
            );
        }else{
            const extra = (
                <div>
                </div>
            );
            return (
                <Row>
                    <Col xs={24} lg={12}>
                        <Result
                            type="success"
                            title={<div style={{ background: '#7dbcea', color: '#fff' }}>已登陆</div>}
                            description={<div style={{ background: 'rgba(16, 142, 233, 1)', color: '#fff' }}></div>}
                            extra={extra}
                            actions={<div style={{ background: '#3ba0e9', color: '#fff' }}><Button onClick={this.handleLoginOut.bind(this)}>点击此处重新登陆</Button></div>}
                        />
                    </Col>
                </Row>
              )
        }
    }
}

