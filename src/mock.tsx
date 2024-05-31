import Mock from 'mockjs'

const domain = '/api/'

// 模拟login接口
Mock.mock(domain + 'login', function () {
    const result = {
        code: 200,
        message: 'OK',
        data: {
            loginUid: 10000,
            nickname: 'admin',
            token: 'he1234',
        },
    }
    return result
})