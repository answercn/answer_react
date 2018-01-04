
import { homeReducer } from './homeReducer.jsx'
import { createReducer } from './createReducer.jsx'
import { combineReducers} from 'redux' 
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

export default combineReducers({
    router:routerReducer,
    home:homeReducer,
    create:createReducer
})