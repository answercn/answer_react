//require( "../node_modules/antd/dist/antd.less");
require( "./less/main.less");
import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/IndexPage.jsx';
import { Provider } from 'react-redux'; 
import { createStore,applyMiddleware} from 'redux';
import indexReducer from './reducers/indexReducer.jsx';
import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
  } from 'react-router-dom'
import {createLogger} from 'redux-logger';


/*------START------*/

  //全局初始数据
const initialState = {
      home:{
        tableDataSource:{dataSource:[],count:0}  
      }
}
//创建日志
const logger = createLogger();
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(indexReducer,initialState,applyMiddleware(thunk,logger,middleware));
  //入口根部组件
class Basic extends React.Component {
      componentDidMount(){
         
      }
      render(){
          // 用来判断本地浏览器是否支持刷新
          const supportsHistory = 'pushState' in window.history;
          return (
            <Provider store={store}>
               {/* <HashRouter forceRefresh={!supportsHistory} keyLength={12}>
                    <Route path="/" component={MainLayout}/>
                </HashRouter> */}
                <ConnectedRouter history={history}>
                    <Route path="/" component={IndexPage}/>
                </ConnectedRouter>
            </Provider>
          )
      }

}
const renderBasicDom = (Compontent)=>{
//基础根组件注入到id为init的DOM元素中
    ReactDOM.render(
      <Compontent/>
      , document.getElementById('init')
    )
}
renderBasicDom(Basic);
//模块热重载问题处理
if(module.hot){
    module.hot.accept(Basic,() => {
      renderBasicDom(Basic)
    })
}