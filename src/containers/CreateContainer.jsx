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
const CreateWithForm = Form.create(createFormOption)(CreateComponents)


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