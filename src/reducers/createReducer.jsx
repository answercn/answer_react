//导入action常量，在actions中统一维护
import* as actionsType from "../actions/actionsType.jsx";
import moment from 'moment';
//home对应的初始state数据
const initialState = {
    createData:{
        size:111,
        sealingstatus:123,
        productname:"A",
        country:"china",
        countryCode:""
    }
}
//此处reducer中的state指的是对应当前reducer下的state的，也就是home下的state
export const createReducer = function (state = initialState, action) {
      // 根据不同的action type进行state的更新
    switch(action.type) {
        case actionsType.CREATE_CHANGE_VALUE:
            for(let key in action.values){
                state.createData[key]=action.values[key]
            }
            return Object.assign({},{...state,createData:state.createData});
            break
        case actionsType.CREATE_SAVE:
            return Object.assign({}, state,{...state,createData:state.createData});
            break
        default:
            return state
      }
  }