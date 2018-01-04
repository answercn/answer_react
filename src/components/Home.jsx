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

/**HOME**/
export default class Home extends React.Component {
  constructor(...arg){
      super(...arg);
      console.log("createdata in home",this.props.createData);
      this.state={
        isEdit:false
      }
  }

  componentDidMount(){
    this.props.actions.initHomeData(()=>{
        this.setState({
          isEdit:true
        })
    });
  }
  componentDidUpdate(){
    // if(this.props.isFinish){
    //   this.props.actions.closeFinishTip();
    // }
  }
  componentWillUnmount(){
   
  }
 
  componentWillReceiveProps(nextProps){
     
  }
  
  render() {
    let {actions} = this.props;
    let {isEdit} = this.state; 
    return (
      <div>
          <AdvancedSearchForm isEdit = {isEdit}  {...this.props}/>
          <EditableTable isEdit = {isEdit} {...this.props}/>
          {/* <DivText>{isFinish}</DivText> */}
      </div>
  );
  }
}
