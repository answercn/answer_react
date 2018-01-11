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
          }
        });
      }
      render(){
          return (
              <LoginForm {...this.props} handleSubmit={this.handleSubmit.bind(this)}/>
          )
      }
}
const WrapLoginForm = Form.create()(Login);
//关联redux
const mapStateToProps = (state, ownProps) => {
    return {
     
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