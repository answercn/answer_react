import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Form, DatePicker, TimePicker, Button } from 'antd';
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
    console.log("sdfsdfds",this.props)
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  }
  render() {
    console.log("sdfsdf", this.props)
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        lg: { span:12}
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        lg: { span:12}
      },
    };
    console.log(this.props)
    let dates = moment(this.props.createFormData.date,'YYYY/MM/DD');
    const config = {
      initialValue:dates,
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <Form onSubmit={this.handleSubmit}>
      <Row>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker"
          >
            {getFieldDecorator('date', config)(
              <DatePicker />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
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
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker"
          >
            {getFieldDecorator('date-picker', config)(
              <DatePicker />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
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
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker"
          >
            {getFieldDecorator('date-picker', config)(
              <DatePicker />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
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
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

