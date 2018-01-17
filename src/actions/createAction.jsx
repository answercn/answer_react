import * as actionsType from "./actionsType.jsx";
import { 
    fetchGet,
    fetchPost
  } from '../util/Quest.jsx'
//初始化数据
export const initHomeData = function(){
 
}
//保存
export const ceateSave = function(data,isFinish,callback){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch({
                type : actionsType.CREATE_SAVE,
                data
            })
        },1000)
    }
}

//表单数据改变
export const onChangeValue = function(field){
    let values = {}
    // if(field){
    //     for(let key in field){
    //         values[field[key].name] = field[key].value
    //     }
    // }
    if(field){
        values = field;
    }
    return {
        type : actionsType.CREATE_CHANGE_VALUE,
        values
    }
}