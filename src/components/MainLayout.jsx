import React from 'react';
import ReactDOM from 'react-dom';
import {FormattedMessage} from 'react-intl';
import GlobalFooter from 'ant-design-pro/es/GlobalFooter';
import * as user from '../util/User.jsx';
import { Layout, Menu, Breadcrumb, Icon,Row,Col,Button} from 'antd';
const { Header, Content, Footer, Switch ,Sider } = Layout;
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch as RouterSwitch
} from 'react-router-dom'

//包装好的处理按需加载的组件
import Bundle from "../util/Bundle.jsx"
//import Home from "../containers/HomeContainer.jsx"
//import About from "./About.jsx"
//异步加载组件
import NoticeContainer from '../containers/NoticeContainer.jsx'
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
/**
 * 页面布局组件
 */
export default class MainLayout extends React.Component {
  constructor(...arg){
    super(...arg);
    this.state = {
      theme: 'dark',
      current: '1',
      collapsed: false,
      selectKey:"home"
    }
  }
  componentWillMount(){
      if (!user.isLogin()) {
        this.props.history.push('/login', null);
      }
      fetch("/service/api").then((r)=>{
        return r.json()
      }).then((t)=>{
        console.log("nginx 反向代理内容",t)
      })
  }
  onCollapse(collapsed) {
    this.setState({ collapsed });
  }
  render() {
    let BreadcrumbItem = this.props.location.hash.replace(/\#\//,"").split("/").map((element,i) => (
          <Breadcrumb.Item key={i}>{element}</Breadcrumb.Item>
        ))
    const {match} = this.props;
    const links = [{
      title: '帮助',
      href: '',
    }, {
      title: '隐私',
      href: '',
    }, {
      title: '条款',
      href: '',
      blankTarget: true,
    }];
    
    const copyright =
    (<div>Copyright <Icon type="copyright" />
    <FormattedMessage
      id='intl.copyright'
      description='sealing System.'
      defaultMessage='sealing System.'
    /></div>);
    //let pathKey = this.props.location.pathname.split("/")[2]||"home"
    let pathKey = this.props.match.params.pagename||"home";
    console.log("MainLayout props",this.props)
    if(user.isLogin()){
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse.bind(this)}
          >
            <div className="logo" style={{lineHeight:"64px",textAlign:"center",color:"#fff"}}>Sealing System</div>
            <Menu ref = {(menu)=>{this.menu = menu}} theme="dark" defaultSelectedKeys={[pathKey]} mode="inline">
              <Menu.Item key={"home"}>
              <Link to={`/home`}>
                  <Icon type="pie-chart" />
                  <span>列表</span>
              </Link>
              </Menu.Item>
              <Menu.Item key={"create"}>
              <Link replace={true} to={`/create`}>
                  <Icon type="desktop" />
                  <span>创建</span>
               </Link>
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="topics">
              <Link to={`/topics`}>
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
          <Header className="header" style={{background:"#fff"}}>
              <Row>
                {/* <Col span={4}>
                        <div className="logo" style={{textAlign:"center",color:"#fff"}}>Sealing System</div>
                    </Col> */}
                    <Col span={16}>
                        <Menu
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          style={{ lineHeight: '64px' }}
                        >
                          <Menu.Item key="1">管理</Menu.Item>
                          <Menu.Item key="2">检查</Menu.Item>
                          <Menu.Item key="3">控制</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={8}>
                        <NoticeContainer {...this.props}/>
                    </Col>
              </Row>
          </Header>
            {/* <Header style={{ background: '#fff', padding: 0 }}></Header> */}
            <Content style={{ margin: '0 16px' }}>
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: '16px 0' }}>
                    {BreadcrumbItem}
              </Breadcrumb>
              {/* 内容 */}
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {/* 路由的父子组件path可以一样，如果一样的话则由父层至子层组件逐级加载 */}
                    <RouterSwitch>
                      <Route path={`/home`} component={Home}/>
                      <Route path={`/create`} component={Create}/>
                      <Route path={`/topics`} component={Topics}/>
                      <Redirect to="/404"/>
                    </RouterSwitch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <GlobalFooter links={links} copyright={copyright} />
            </Footer>
          </Layout>
          </Layout>
        </Layout>
    )}else{
      return (
      <div>
          <span><Link to={"/login"}>点此登陆</Link></span>
      </div>);
    }
  }
}
