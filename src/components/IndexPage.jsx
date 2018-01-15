import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import Login from '../containers/LoginContainer.jsx';
// import MainLayout from '../containers/MainLayoutContainer.jsx';
const { Header, Content, Footer,Sider } = Layout;
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch 
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
              <Switch>
                  <Route path="/login" component={Login}/>
                  <Route exact path="/404" component={() => (<div>404</div>)}/> 
                  {/* main页面公共组件，凡path中包含/main的都会加载MainLayout组件，这也是不把他作为"/"来用的原因 */}
                  <Route path="/:pagename" component={MainLayout}/>
                  {/* 重定向至主home页面 */}
                  <Route exact path="/" render={() => (<Redirect to="/home"/>)}></Route > 
                  <Route render={() => (<Redirect to="/404"/>)}/> 
              </Switch>
            </div>
        )
    }
}
