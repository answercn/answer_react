// 导入action常量，在actions中统一维护
import * as actionsType from '../actions/actionsType.jsx';
// home对应的初始state数据
const initialState = {
    language: 'zh_CN'
};
// 此处reducer中的state指的是对应当前reducer下的state的，也就是home下的state
export const i18nReducer = function (state = initialState, action) {
      // 根据不同的action type进行state的更新
    switch (action.type) {
        case actionsType.CHANGE_LANGUAGE:
            return Object.assign({}, state, {language: action.language});
        default:
            return state;
    }
};
