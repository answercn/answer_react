import * as actionsType from "./actionsType.jsx";
import { 
    fetchGet,
    fetchPost
  } from '../util/Quest.jsx'
//初始化数据
export const initHomeData = function(){
    return dispatch => {
        setTimeout(()=>{
            let data = {
                isFinish:false,
                tableDataSource:{
                    dataSource:[{
                        key: '0',
                        name: 'Edward King 0',
                        age: '32',
                        address: 'London, Park Lane no. 0',
                    }, {
                        key: '1',
                        name: 'Edward King 1',
                        age: '32',
                        address: 'London, Park Lane no. 1',
                    }],
                    count: 2
                    }
            }
            dispatch({
                type : actionsType.INIT_HOME_DATA,
                data
            }) 
        },500);
    }
      fetchGet("../../data.json",null,function(e){
          console.log(e)
      })
}
//保存
export const save = function(data,isFinish,callback){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch({
                type : actionsType.SAVE_FINISH,
                data,
                isFinish:!isFinish
            })
            callback&&callback()
        },1000)
    }
}
//增加一行
export const addRow = function(newRowData){
    return {
        type : actionsType.ADD_ROWDATA,
        newRowData
    }
}
// export const closeFinishTip = function(){
//     return (dispatch,getState)=>{
//         setTimeout(()=>{
//             dispatch({
//                 type : actionsType.CLOSE_FINISHTIP,
//                 isFinish : false
//             })
//         },1000)
//     }
// }
//表单数据改变
export const changeFormValue = function(e){
    let data ={value:e.target.value,name:e.target.name};
    return {
        type : actionsType.CHANGE_VALUE,
        name:data.name,
        value:data.value
    }
}