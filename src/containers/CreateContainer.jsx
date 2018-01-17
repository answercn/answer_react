import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createForm, createFormField } from 'rc-form';
import schema from 'async-validator';
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
          callback("不能小于十");//只要callback中放置内容就会走error，return无效，return只能不让代码继续执行
        }else{
          callback()//callback必须执行，不传参数给callback视为通过验证
        }
    }
    handleSubmit = (e) => {
        debugger
        e.preventDefault();
        //表单数据校验
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(err)
          if (err) {
            return;
          }
         fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          this.props.actions.ceateSave(fieldsValue);
          
        });
    }
    componentDidUpdate(){
    
    }
    componentDidMount(){
        //可在此处通过该方法将带过来的值或者请求来的值设置到form中
        this.props.form.setFieldsValue({country:"use",testEnter:"testcontent"})
    }
    componentWillReceiveProps(nextprops){
    
    }
    handleCountryChange = (value) => {
        this.props.form.setFieldsValue({
            countryCode: value === 'china' ? `Hi,${value}!`: "",
        });
    }
    render(){
        return(
            <CreateComponents sizeCheck={this.sizeCheck.bind(this)} handleSubmit={this.handleSubmit.bind(this)} handleCountryChange={this.handleCountryChange.bind(this)} {...this.props}/>
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
        
           
        //props.form.getFieldInstance(fields.name) // use this to g
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