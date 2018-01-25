//require( "../node_modules/antd/dist/antd.less");
import 'babel-polyfill';
import Promise from 'promise-polyfill';
 
// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}
//打印环境变量
console.warn("ENV >>>>>>>>>>>>>>>>>>",process.env.NODE_ENV);

require( "./less/main.less");

import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/IndexPage.jsx';
import { Provider } from 'react-redux'; 
import { createStore,applyMiddleware} from 'redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import zh_CN from './i18n/zh.jsx';
import en_US from './i18n/en.jsx';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import intl from 'intl';
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
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

let logger;
let middlewareResult;

if(process.env.NODE_ENV === "development"){
  logger = createLogger();
  middlewareResult = applyMiddleware(thunk,logger,middleware);
}else{
  middlewareResult = applyMiddleware(thunk,middleware);
}
   

let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
  store = createStore(indexReducer,initialState,middlewareResult);
}else{
  //插件调试，未安装会报错
  store = createStore(indexReducer,initialState,middlewareResult,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

//国际化处理
addLocaleData([...en,...zh]);
  //入口根部组件
class Basic extends React.Component {
      componentDidMount(){
         
      }
      render(){
          // 用来判断本地浏览器是否支持刷新
          const supportsHistory = 'pushState' in window.history;
          return (
            <Provider store={store}>
                <IntlProvider locale={'zh'} messages={zh_CN}>
                    {/* <HashRouter forceRefresh={!supportsHistory} keyLength={12}>
                          <Route path="/" component={MainLayout}/>
                      </HashRouter> */}
                      <ConnectedRouter history={history}>
                          <Route path="/" component={IndexPage}/>
                      </ConnectedRouter>
                </IntlProvider>
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