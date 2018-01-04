//导入action常量，在actions中统一维护
import* as actionsType from "../actions/actionsType.jsx";
//home对应的初始state数据
const initialState = {
    createData:{
        date:"2017/01/04"
    }
}
//此处reducer中的state指的是对应当前reducer下的state的，也就是home下的state
export const createReducer = function (state = initialState, action) {
      // 根据不同的action type进行state的更新
    switch(action.type) {
        case actionsType.SAVE_FINISH:
            return Object.assign({}, state, action.createData);
            break
        default:
            return state
      }
  }