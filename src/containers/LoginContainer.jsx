import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {LoginForm} from '../components/Login.jsx';
import { Form } from 'antd';
import * as allActions from "../actions/loginAction.jsx"

// 容器组件代码
const WrapLoginForm = Form.create()(LoginForm);
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
        actions:bindActionCreators(allActions, dispatch),
        handleSubmit(e, props){
            e.preventDefault();
            props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    props.actions.loginIn(values, props.history, props.location)
                }
            });
        },
        usernameCheck(rule, values, callback){
            //该方法为自定义实时校验，错误信息作为callback的参数传递进去
            if(values&&values.length<8){
                callback("不能小于8位")
            }else{
                callback()
            }
        },
        passwordCheck(rule, values, callback){
            //该方法为自定义实时校验，错误信息作为callback的参数传递进去
            if(values&&values.length<8){
                callback("不能小于8位")
            }else{
                callback()
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrapLoginForm)