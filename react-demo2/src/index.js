import React from 'react';      //核心引用
import ReactDOM from 'react-dom'
import App from './App';  //引用的基础组件

// 1、
// 声明一个具体的人
const name = 'cnHuaShao'
// 使用JSX语法声明一个变量
const element = <h1>Hello，{name}</h1>

// 2、
// 声明一个具体的姓名集合
const user = {
  firstName: '张',
  lastName: '三'
}
// 拼接方法
function formatName(user){
  return user.firstName + ' ' + user.lastName
}
// 最终拼接效果
const element2 = (
  <h1>
    Hello,{formatName(user)}
  </h1>
)

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  // element,
  element2,
  document.getElementById('root')
);