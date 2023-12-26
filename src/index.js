import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root2'));


function render() {

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('基座下发的能力：', props);

  // 可通过 props.getGlobalState() 获取基座下发的数据

  // props.setGlobalState({user: {name: ''}}) 改变全局的数据

  // props.onGlobalStateChange 监听全局数据的变化
  const root = ReactDOM.createRoot(props.container ? props.container.querySelector('#root2') : document.getElementById('root2'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  //ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  root.unmount()
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}