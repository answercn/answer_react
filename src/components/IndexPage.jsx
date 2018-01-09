import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import Login from '../containers/LoginContainer.jsx';
// import MainLayout from '../containers/MainLayoutContainer.jsx';
const { Header, Content, Footer, Switch ,Sider } = Layout;
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
//包装好的处理按需加载的组件
import Bundle from "../util/Bundle.jsx"
//异步加载组件
import loginContainer from 'bundle-loader?lazy&name=[name]!../containers/LoginContainer.jsx'
import mainLayoutContainer from 'bundle-loader?lazy&name=[name]!../containers/MainLayoutContainer.jsx'
//组件按需加载
const Login = (props) => (
  <Bundle load={loginContainer}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
const MainLayout = (props) => (
  <Bundle load={mainLayoutContainer}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export default class IndexPage extends React.Component{
    constructor(...props){
        super()
    }
    render(){
        return (
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/:id?" component={MainLayout}/>
                <Route exact path="/" render={() => (<Redirect to="/home"/>)}></Route >
            </div>
        )
    }
}
