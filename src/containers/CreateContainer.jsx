import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createForm, createFormField } from 'rc-form';
import CreateComponents from '../components/Create.jsx';
import * as allActions from "../actions/createAction.jsx"
import { Form, DatePicker, TimePicker, Button } from 'antd';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

//容器组件开始
class Create extends React.Component{
    constructor(...props){
        super(...props);
      }
    sizeCheck(rule, values, callback){
        //该方法为自定义实时校验，错误信息作为callback的参数传递进去
        if(values&&values<10){
          callback("不能小于十")
        }else{
          callback()
        }
      }
      handleSubmit = (e) => {
        e.preventDefault();
        //表单数据校验
        this.props.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', fieldsValue.size);
         
         
          this.props.actions.ceateSave(fieldsValue);
        });
      }
      componentDidUpdate(){
      
      }
      componentDidMount(){
        //可在此处通过该方法将带过来的值或者请求来的值设置到form中
        this.props.form.setFieldsValue({productname:"B",country:"use"})
      }
      componentWillReceiveProps(nextprops){
       
      }
      handleCountryChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
          countryCode: `Hi, ${value === 'china' ? value : ""}!`,
        });
      }
      render(){
          return(
            <CreateComponents handleSubmit={this.handleSubmit.bind(this)} handleCountryChange={this.handleCountryChange.bind(this)} {...this.props}/>
          )
      }
}

/**
 * form高阶组件包装start
 * */
const createFormOption = {
    mapPropsToFields(props) {
        //此步骤在初始化数据的时候将store中的数据映射给form
        return {
            sealingstatus: Form.createFormField({
                value:props.createData.sealingstatus
            }),
            productname: Form.createFormField({
                value:props.createData.productname
            }),
            country: Form.createFormField({
                value:props.createData.country
            }),
            size: Form.createFormField({
                value:props.createData.size
            }),
            countryCode: Form.createFormField({
                value:props.createData.countryCode
            })
        };
    },
    onFieldsChange(props, fields) {
        //form所有form的元素发生变化时触发该事件，包括元素的显示隐藏都会触发
        //props.actions.onChangeValue(fields);
    },
    onValuesChange(props, values) {
        props.actions.onChangeValue(values);
    },
}
//经过FORM HOC的处理
const CreateWithForm = Form.create(createFormOption)(Create)
/**
 * form高阶组件包装end
 * */


/**
* connect链接redux
*/
// 映射State和dispatch代码
const mapStateToProps = (state, ownProps) => {
    return {
        createData:state.create.createData
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
  )(CreateWithForm)