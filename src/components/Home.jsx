import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon,Button,Table, Input, Popconfirm} from 'antd';
const { Header, Content, Footer, Switch ,Sider } = Layout;
const SubMenu = Menu.SubMenu;
import EditableTable from '../containers/hometableContainers/EditableTableContainer.jsx'
import AdvancedSearchForm from '../containers/hometableContainers/AdvancedSearchFormContainer.jsx'
import {withReverse} from '../HOC/withReverse.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//高阶组件测试
// let DivOld = ({children,...props}) => <div {...props}>{children}</div>;
// const DivText = withReverse(DivOld);

/**
 * 首页组件
 */
export default class Home extends React.Component {
  constructor(...arg){
      super(...arg);
      console.log("createdata in home",this.props.createData);
      this.isEdit = false;
  }
  componentDidMount(){
    let promiseInit = new Promise((resolve,reject)=>{
      this.props.actions.initHomeData(()=>{
        resolve()
      });
    });
    Promise.all([promiseInit]).then((value)=>{
      // success
      this.isEdit = true
     
    }, function(error) {
      // failure
    })
  }
  componentDidUpdate(){
    
  }
  componentWillUnmount(){
    
  }
 
  componentWillReceiveProps(nextProps){
  }
  
  render() {
    let {actions} = this.props;
    return (
      <div>
          <AdvancedSearchForm isEdit = {this.isEdit}  {...this.props}/>
          <EditableTable isEdit = {this.isEdit} {...this.props}/>
          {/* <Route path={'/home/:id'} render={({match})=><div>{match.params.id}</div>}></Route> */}
      </div>
  );
  }
}
