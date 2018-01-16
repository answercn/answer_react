import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Form, DatePicker, TimePicker, Button,Input,Select } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
import {
  Route,
  Link
} from 'react-router-dom'

/**
 * 新建组件
 */
export default class Create extends React.Component {
  constructor(...props){
    super(...props);
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
      <Form onSubmit={this.props.handleSubmit}>
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
                {getFieldDecorator('testEnter', {
                    rules: [{ required: true, message: 'Username is required!' }],
                })(<Input />)}
                </FormItem>
            </Col>}
          
          <Col {...tableColSize}>
            <FormItem
              {...formItemLayout}
              label="size"
            >
              {getFieldDecorator('size', {
                  rules: [
                    {  required: true, message: 'size is required!' },
                    { validator: this.props.sizeCheck }
                  ]
                 
              })(<Input />)}
              </FormItem>
          </Col>
          <Col {...tableColSize}>
            <FormItem
              {...formItemLayout}
              label = "country"
            >
              {getFieldDecorator('country', {
                  rules: [{ required: true, message: 'Username is required!' }],
              })(
                <Select placeholder="Please select a country" onChange={this.props.handleCountryChange.bind(this)}>
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
              </FormItem>
          </Col>
            
        </Row>
        <Row>
          <Col {...tableColSize} style={{display:this.props.createData.country=="china"?"block":"none"}}>
            <FormItem
              {...formItemLayout}
              label="countryCode"
            >
              {getFieldDecorator('countryCode', {
                  rules: [{ required: true, message: 'countryCode is required!' }],
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

