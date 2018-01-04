import AdvancedSearchForm from '../../components/hometable/AdvancedSearchForm.jsx'
import { Form} from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as allActions from "../../actions/homeAction.jsx"
const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
const mapStateToProps = (
    state,
    ownProps
)=>{
    return {
       formData:state.home.formData
    }
}
const mapDispatchToProps = (
    dispatch,
    ownProps
)=>{
    return {
        actions:bindActionCreators(allActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WrappedAdvancedSearchForm)