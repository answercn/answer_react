import * as cookie from 'js-cookie';
import {fetchPost,httpServerBasePath} from './Quest.jsx'
require('fetch-detector');
require('fetch-ie8');
require('isomorphic-fetch');
import 'whatwg-fetch';
const login = (data, history, nextPathname, callback) => {
    let loginMessage = "";
    let param = {
        username:data.username,
        password:data.password
    }
    fetch(
        '/testToken.json',
        { // url: 请求地址
        method: "GET", // 请求的方法POST/GET等
        headers : { // 请求头（可以是Headers对象，也可是JSON对象）
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }, 
        mode: 'cors',
        data:param, // 请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get或head方法中不能包含body）
        cache : 'default', // 是否缓存这个请求
        credentials : 'include', //要不要携带 cookie 默认不携带 omit、same-origin 或者 include
    }).then(res => {
        if (res.status === 401) {
            history.push('/login');
            return Promise.reject('Unauthorized.');
        } else {
            console.log("testToken",res)
            return res.json();
        }
        // 注： 这里的 resp.json() 返回值不是 js对象，通过 then 后才会得到 js 对象
        throw new Error ('false of json');
    }).then(result => {
        console.log("testToken res",result)
        const data = JSON.parse(result);
                cookie.set('current-user', data,{ expires: 1 });
                loginMessage = {name: 'login', value: result.result, remember: data.remember};
                callback && callback(loginMessage);
                history.push(nextPathname, null);
    }).catch(error => {
            const errMessage = error;
                loginMessage = {err: errMessage};
                callback && callback(loginMessage);
    })
}
const logout = (appSn, callback) => {
    const user = cookie.get('current-user');
    cookie.remove('current-user');
    //此处发送登出请求
   // fetchPost('/user/logout.do', user ? {...user, appSn} : {appSn});
    callback && callback();
}

const loginUser = () => {
    return cookie.get('current-user');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'string';
};

const loginOut = (appSn,history, pathname) => {
    debugger
    logout(appSn, () => {
        history ?
            history.push(`/login?returnPath=${pathname}`) :
            window.location.href = `/public/index.html#/login?returnPath=${pathname}`;
    });
};

const goToLogin = (history, pathname) => {
   logout(appSn, () => {
        history.push('/login?returnPath=' + pathname, {nextPathname: pathname});
    });
};

export {login,loginUser, isLogin, logout,loginOut, goToLogin};
