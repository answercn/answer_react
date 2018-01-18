//导入action常量，在actions中统一维护
import* as actionsType from "../actions/actionsType.jsx";
//home对应的初始state数据
const initialState = {

}

let count;
let dataSource;
//此处reducer中的state指的是对应当前reducer下的state的，也就是home下的state
export const homeReducer = function (state = initialState, action) {
      // 根据不同的action type进行state的更新
    switch(action.type) {
        case actionsType.INIT_HOME_DATA:
            return Object.assign({}, state, action.data);
            break
        case actionsType.SAVE_FINISH:
            const newSaveData = {};
        //    if(action.data){
        //        newSaveData["tableDataSource"]=action.data
        //    }
            newSaveData["tableDataSource"]=action.data
            newSaveData["isFinish"] = action.isFinish
            return Object.assign({}, state, newSaveData);
            break
        // case actionsType.CLOSE_FINISHTIP:
        //     return Object.assign({}, state, {isFinish:action.isFinish});
        //     break
        case actionsType.ADD_ROWDATA:
              count = state.tableDataSource.count;
              dataSource = state.tableDataSource.dataSource;
            let newData = {
                    key: count,
                    name: `Edward King ${count}`,
                    age: 32,
                    address: `London, Park Lane no. ${count}`,
            };
            debugger
            return Object.assign({},state,{
                    tableDataSource:{
                        dataSource: [...dataSource, newData],
                        count: count + 1,
                    }
            })
            break
        case actionsType.DELETE_ROWDATA:

            count = state.tableDataSource.count;
            dataSource = state.tableDataSource.dataSource;
            let newDataSource = dataSource.filter(item => item.key !== action.key);
            return Object.assign({},state,{tableDataSource:{count:newDataSource.length,dataSource:newDataSource }});
            break
        case actionsType.CHANGE_VALUE:
            let fromData = state.formData||{};
            fromData[action.name]=action.value
            return Object.assign({},state,{fromData})
            break
        default:
            return state
      }
  }