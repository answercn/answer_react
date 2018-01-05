import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Switch ,Sider } = Layout;
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
//包装好的处理按需加载的组件
import Bundle from "../util/Bundle.jsx"
//import Home from "../containers/HomeContainer.jsx"
//import About from "./About.jsx"
//异步加载组件
import homeContainer from 'bundle-loader?lazy&name=[name]!../containers/HomeContainer.jsx'
import createContainer from 'bundle-loader?lazy&name=[name]!../containers/CreateContainer.jsx'
//组件按需加载
const Home = (props) => (
  <Bundle load={homeContainer}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
const Create = (props) => (
  <Bundle load={createContainer}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
//路由配置
const routes = [
  { path: '/home',
    exact: true,
    sidebar: () => <div>Home!</div>,
    main: () =>Home
  },
  { path: '/about',
    sidebar: () => <div>About!</div>,
    main: () =>About
  },
  { path: '/topics',
    sidebar: () => <div>shoelaces!</div>,
    main: () =>Topics
  }
]
export default class MainLayout extends React.Component {
  constructor(...arg){
    super(...arg);
    this.state = {
      theme: 'dark',
      current: '1',
      collapsed: false
    }
  }
  onCollapse = (collapsed) => {
   // console.log("collapsed",collapsed);
    this.setState({ collapsed });
  }

  componentDidMount(){
  
  }
  render() {
    let BreadcrumbItem = this.props.location.hash.replace(/\#\//,"").split("/").map((element,i) => (
          <Breadcrumb.Item key={i}>{element}</Breadcrumb.Item>
        ))
    let {match} = this.props;
    return (
        <Layout style={{ minHeight: '100vh' }}>
           <Header>
            react
          </Header>
          <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
              <Link to={match.url+"/home"}>
                  <Icon type="pie-chart" />
                  <span>Home</span>
              </Link>
              </Menu.Item>
              <Menu.Item key="2">
              <Link replace={true} to={match.url+"/create"}>
                  <Icon type="desktop" />
                  <span>create</span>
               </Link>
              </Menu.Item>
            
              <SubMenu
                key="sub1"
                title={
                <span><Icon type="pie-user"/>
                    <span>User</span>
                </span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
              <Link to="/index/topics">
                  <Icon type="file" />
                  <span>topics</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub10"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
              <Menu.Item key="10">
                  <Icon type="file" />
                  <span>topics</span>
              </Menu.Item>
              <Menu.Item key="11">
                  <Icon type="file" />
                  <span>topics</span>
              </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header style={{ background: '#fff', padding: 0 }}></Header> */}
            <Content style={{ margin: '0 16px' }}>
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: '16px 0' }}>
                    {BreadcrumbItem}
              </Breadcrumb>
              {/* 内容 */}
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {/* {routes.map((item,index)=>(
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        component={item.component}
                      />
                  ))} */}
                  <Route exact path={match.url+"/home"} component={Home}/>
                  <Route path={match.url+"/create"} component={Create}/>
                  <Route path={match.url+"/topics"} component={Topics}/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                      sealing react system
            </Footer>
          </Layout>
          </Layout>
        </Layout>
       
    );
  }
}
