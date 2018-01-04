import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createForm, createFormField } from 'rc-form';
import CreateComponents from '../components/Create.jsx';
import * as allActions from "../actions/createAction.jsx"
import { Form, DatePicker, TimePicker, Button } from 'antd';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

const createFormOption = {
    mapPropsToFields(props) {
        console.log('mapPropsToFields', props);
        return {
            email: createFormField(props.createFormData.email),
        };
    },
    onFieldsChange(props, fields) {
        console.log('onFieldsChange1', fields);
        // props.dispatch({
        //     type: 'save_fields',
        //     payload: fields,
        // });
    }
}
//经过FORM HOC的处理。。。。。。
const CreateWithForm = Form.create(createFormOption)(CreateComponents)


// 映射State和dispatch代码
const mapStateToProps = (state, ownProps) => {
    return {
      createFormData:state.create.createData
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