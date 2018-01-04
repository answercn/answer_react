import * as actionsType from "./actionsType.jsx";
import { 
    fetchGet,
    fetchPost
  } from '../util/Quest.jsx'
//初始化数据
export const initHomeData = function(){
 
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

//表单数据改变
export const changeFormValue = function(e){
    let data ={value:e.target.value,name:e.target.name};
    return {
        type : actionsType.CHANGE_VALUE,
        name:data.name,
        value:data.value
    }
}