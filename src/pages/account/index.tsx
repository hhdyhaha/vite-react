import {useNavigate} from 'react-router-dom'
import {Button, theme} from 'antd'
// import Header from '@/components/header'
import './account.styl'

const {useToken} = theme

function Account() {
    // 创建路由钩子
    const navigate = useNavigate()
    // 获取Design Token
    const {token} = useToken()
    return (
        <div className="P-account">
            {/*<Header title="account" info={() => {*/}
            {/*    console.log('info:account')*/}
            {/*}}/>*/}
            <h1 style={{color: token.colorText}}>Account Page</h1>
            <div className="ipt-con">
                <Button type="primary" onClick={() => {
                    navigate('/login')
                }}>返回登录</Button>
            </div>
        </div>
    )
}

export default Account