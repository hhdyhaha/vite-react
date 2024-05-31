import {useNavigate} from 'react-router-dom'
import {Button, theme} from 'antd'
// import Header from '@/components/header'
import {goto} from '@/api'
import './home.styl'

const {useToken} = theme

function Index() {
    // 创建路由钩子
    const navigate = useNavigate()
    // 获取Design Token
    const {token} = useToken()
    return (
        <div className="P-home">
            {/*<Header title={"home"} info={() => {*/}
            {/*    console.log('info.home')*/}
            {/*}}/>*/}
            <h1 style={{color: token.colorText}}>Home Page</h1>
            <div className="ipt-con">
                <Button onClick={() => {
                    goto('/login')
                }}>组件外跳转</Button>
            </div>
            <div className="ipt-con">
                <Button type="primary" onClick={() => {
                    navigate('/login')
                }}>返回登录</Button>
            </div>
        </div>
    )
}

export default Index