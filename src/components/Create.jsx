import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Form, DatePicker, TimePicker, Button,Input } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
import {
  Route,
  Link
} from 'react-router-dom'


export default class Create extends React.Component {
  constructor(...props){
    super(...props);
    console.log(this.props)
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      // const rangeValue = fieldsValue['range-picker'];
      // const rangeTimeValue = fieldsValue['range-time-picker'];
      // const values = {
      //   ...fieldsValue,
      //   'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      //   'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      //   'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      //   'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      //   'range-time-picker': [
      //     rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      //     rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      //   ],
      //   'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      // };
      console.log('Received values of form: ', fieldsValue);
      this.props.actions.ceateSave(fieldsValue);
    });
  }
  componentDidUpdate(){
  
  }
  componentDidMount(){
    //可在此处通过该方法将带过来的值设置到form中
    this.props.form.setFieldsValue({productname:"B"})
  }
  componentWillReceiveProps(nextprops){
    
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        lg: { span: 10}
      },
      wrapperCol: {
        xs: { span: 24},
        sm: { span: 12},
        lg: { span: 12}
      },
    };
    //let dates = moment(this.props.createFormData.date,'YYYY/MM/DD');
    const config = {
      //initialValue:dates,
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const tableColSize = {xs:24,sm:12,lg:8};
    return (
      <Form onSubmit={this.handleSubmit}>
      <Row>
        <Col {...tableColSize}>
          <FormItem
            {...formItemLayout}
            label="sealingstatus"
          >
            {getFieldDecorator('sealingstatus', {
                rules: [{ required: true, message: 'Username is required!' }],
            })(<Input />)}
            </FormItem>
        </Col>
        <Col {...tableColSize}>
          <FormItem
            {...formItemLayout}
            label="productname"
          >
            {getFieldDecorator('productname', {
                rules: [{ required: true, message: 'Username is required!' }],
            })(<Input />)}
          </FormItem>
        </Col>
        <Col {...tableColSize}>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>
        </Col>
        </Row>
        <Row>
          {this.props.createData.productname=="A"&&
            <Col {...tableColSize}>
              <FormItem
                {...formItemLayout}
                label="试点输入"
              >
                {getFieldDecorator('试点输入', {
                    rules: [{ required: true, message: 'Username is required!' }],
                })(<Input />)}
                </FormItem>
            </Col>}
          
          <Col {...tableColSize}>
            <FormItem
              {...formItemLayout}
              label="ddd"
            >
              {getFieldDecorator('ddd', {
                  rules: [{ required: true, message: 'Username is required!' }],
              })(<Input />)}
              </FormItem>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <FormItem>
              <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

