
import {homeReducer} from './homeReducer.jsx';
import {createReducer} from './createReducer.jsx';
import {noticeReducer} from './noticeReducer.jsx';
import {userReducer} from './userReducer.jsx';
import {i18nReducer} from './i18nReducer.jsx';
import {combineReducers} from 'redux';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';

export default combineReducers({
    i18n: i18nReducer,
    router: routerReducer,
    home: homeReducer,
    create: createReducer,
    notice: noticeReducer,
    user: userReducer
});
