import * as actionsType from "./actionsType.jsx";
import { 
    fetchGet,
    fetchPost
  } from '../util/Quest.jsx'

export const changeLanguage = function(cb){
    return {
        type:actionsType.CHANGE_LANGUAGE,
        language:"en_US"
        
    }
}
