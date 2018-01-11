//导入action常量，在actions中统一维护
import* as actionsType from "../actions/actionsType.jsx";
import moment from 'moment';
//home对应的初始state数据
const initialState = {
    userData:{
        name:"test1",
        rule:"ALL"
    }
}
//此处reducer中的state指的是对应当前reducer下的state的，也就是home下的state
export const userReducer = function (state = initialState, action) {
      // 根据不同的action type进行state的更新
    switch(action.type) {
        default:
            return state
      }
  }