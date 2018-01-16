import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Table, Input, Icon, Button, Popconfirm,Alert} from 'antd';
import EditableCell from './EditableCell.jsx'

//table UI組件
export default class EditableTable extends React.Component {
    static propTypes ={
      isEdit:PropTypes.bool,
      tableDataSource:PropTypes.object,
      isFinish:PropTypes.bool
    }
    constructor(props) {
      super(props);
      this.state = {
        isEdit:false
      }
      this.Alert = "";
      //列配置
      this.columns = [{
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'name')}
          />
        ),
      }, {
        title: 'age',
        dataIndex: 'age',
      }, {
        title: 'address',
        dataIndex: 'address',
      }, {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            this.props.tableDataSource.length > 1 ?
            (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                <a href="#">Delete</a>
              </Popconfirm>
            ) : null
          );
        },
      }];
     
    }
    onCellChange = (key, dataIndex) => {
      return (value) => {
        const dataSource = [...this.props.tableDataSource.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
          target[dataIndex] = value;
          Object.assign(this.props.tableDataSource,{ dataSource });
        }
      };
    }
    //跳转到新增页面
    linkToAddPage = function(history){
     // let param = "105363748"
      //history.push(`/index/create/${param}`);
      history.push({pathname:`/create`,state:{status:"from home"}})
    }
    onDelete = (key) => {
      const dataSource = [...this.props.tableDataSource];
      Object.assign(this.props.tableDataSource,{ dataSource: dataSource.filter(item => item.key !== key) });
    }
    closeCb(){
      console.log(this.Alert)
    }
    componentWillUpdate(){
    
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.isEdit==this.state.isEdit) return
      this.setState({
        isEdit:nextProps.isEdit
      })
    }
    handleSave(){
      const {isFinish,tableDataSource,actions} = this.props;
      //此处提供了一个callback在actions中执行，此处有待商榷，该逻辑是写在actions中还是写在callback中
      actions.save(tableDataSource,isFinish,()=>{
            //更新组件的状态，因为组件没提供属性改变后生命周期的对应接口，所以如果用户把这个组件close掉了
            //再次点击finsh的时候就无法显示出来这个组件，为了让他不论close与否，每次点击都显示组件
            this.Alert.updater.enqueueSetState(this.Alert,{
              closed:false,
              closing:true
            })
      })
      
    }
    render() {
      const {isFinish,tableDataSource,actions,history} = this.props;
      const columns = this.columns;
      let finishCb = isFinish?{
        message:"保存成功",
        type:"success"
      }:{
        message:"未保存",
        type:"warning"
      };
      return (
        <div>
          <Button className="editable-add-btn" disabled={!this.state.isEdit} onClick={actions.addRow.bind(this)}>Add</Button>
          <Button className="editable-add-btn" onClick={this.linkToAddPage.bind(this,history)}>linkToAddPage</Button>
          <Table bordered dataSource={tableDataSource.dataSource} columns={columns} />
          <Button onClick = {this.handleSave.bind(this)}>finish</Button>
          <Alert {...finishCb} showIcon ref={(Alert)=>this.Alert = Alert} closeText="close" onClose={this.closeCb.bind(this)}/>
        </div>
      );
    }
  }
  