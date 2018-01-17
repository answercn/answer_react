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

class EditTable extends React.Component{
    constructor(...props){
        super(...props);

    }
    deleteRow(){
        const dataSource = [...this.props.tableDataSource.dataSource];
        Object.assign(this.props.tableDataSource,{ dataSource: dataSource.filter(item => item.key !== key) });
    }
    render(){
        return (
            <EditableTables deleteRow={this.deleteRow.bind(this)} {...this.props}/>
        )
    }
}
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
)(EditTable)