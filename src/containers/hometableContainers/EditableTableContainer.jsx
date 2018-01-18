import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import EditableTables from '../../components/hometable/EditableTable.jsx';
import * as allActions from "../../actions/homeAction.jsx"
import {bindActionCreators} from "redux";
import { 
  fetchGet,
  fetchPost
} from '../../util/Quest.jsx'
// 容器组件代码
const mapStateToProps = (state, ownProps) => {
    return {
      isFinish:state.home.isFinish,
      tableDataSource:state.home.tableDataSource,
      tableLocation:ownProps
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
)(EditableTables)