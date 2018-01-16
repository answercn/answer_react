import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {LoginForm} from '../components/Login.jsx';
import { Form } from 'antd';
const FormItem = Form.Item;
import * as allActions from "../actions/loginAction.jsx"

// 容器组件代码
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.actions.loginIn(values,this.props.history,this.props.location)
          }
        });
    }
    usernameCheck(rule, values, callback){
        //该方法为自定义实时校验，错误信息作为callback的参数传递进去
        if(values&&values.length<8){
            callback("不能小于8位")
        }else{
            callback()
        }
    }
    passwordCheck(rule, values, callback){
        //该方法为自定义实时校验，错误信息作为callback的参数传递进去
        if(values&&values.length<8){
            callback("不能小于8位")
        }else{
            callback()
        }
    }
    render(){
        return (
            <LoginForm {...this.props} passwordCheck={this.passwordCheck.bind(this)} usernameCheck={this.usernameCheck.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        )
    }
}
const WrapLoginForm = Form.create()(Login);
//关联redux
const mapStateToProps = (state, ownProps) => {
    return {
        userData:state.user.userData
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
      actions:bindActionCreators(allActions,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrapLoginForm)