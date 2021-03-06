import * as actionsType from "./actionsType.jsx";
import { 
    fetchGet,
    fetchPost
  } from '../util/Quest.jsx'
import * as user from '../util/User.jsx'


export const loginIn = function(value,history,location){
  let pathname = '/home';
  if(location&&location.search){
    pathname = location.search.split("?")[1].split("=")[1]
  }
  return (dispatch,getState)=>{
      user.login(value, history, pathname).then((res)=>{
          debugger
            dispatch({
                type : actionsType.LOGIN_IN,
                res
            })
      })
  }
}
export const loginOut = function(value,history,location){
  let pathname = '/home';
  if(location&&location.pathname&&location.pathname!='/login'){
    pathname = location.pathname
  }
  return (dispatch,getState)=>{
      user.loginOut(value, history, pathname ,(res)=>{
          dispatch({
              type : actionsType.LOGIN_OUT
          })
      })
  }
}