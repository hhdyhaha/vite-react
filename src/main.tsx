import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {globalRouters} from '@/router'
// import App from './App.tsx'
// import App from '@/pages/login'
// import App from '@/pages/home'
// import App from '@/pages/account'
// 全局样式
import '@/common/styles/frame.styl'
import {ConfigProvider} from 'antd'
import {store} from '@/store'
import {Provider} from 'react-redux'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
import './mock'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*使用Provider把store项目包起来,就可以随时随地访问store了*/}
        <Provider store={store}>
            <ConfigProvider locale={zhCN}>
                {/*<App/>*/}
                <RouterProvider router={globalRouters}/>
            </ConfigProvider>
        </Provider>

    </React.StrictMode>,
)
