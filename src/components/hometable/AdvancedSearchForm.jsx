import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;

export default class AdvancedSearchForm extends React.Component {
    state = {
      expand: false,
    };
    componentDidMount(){
      let fromInitData = this.props.fromData
      //渲染完成后给元素设置值
      this.props.form.setFieldsValue(fromInitData);
    }
    handleSearch = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
    }
  
    handleReset = () => {
      this.props.form.resetFields();
    }
  
    toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
    }
  
    // To generate mock Form.Item
    getFields() {
      const count = this.state.expand ? 10 : 6;
      const { form:{getFieldDecorator},formItemValue,actions } = this.props;
      const children = [];
      for (let i = 0; i < 10; i++) {
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={`Field ${i}`}>
              {getFieldDecorator(`field-${i}`)(
                <Input name={`field-${i}`} onChange={actions.changeFormValue.bind(this)} placeholder="placeholder" />
              )}
            </FormItem>
          </Col>
        );
      }
      return children;
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">Search</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                      Clear
                    </Button>
                    <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                      Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                    </a>
                </Col>
            </Row>
        </Form>
      );
    }
  }
  