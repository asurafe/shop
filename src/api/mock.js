// 对axios进行二次封装
import axios from 'axios';

// 引入nprogress进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

// 创建axios实例
const request = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
// nprogress.start() 开始进度条
// nprogress.done()  结束进度条
request.interceptors.request.use((config) => {
    nprogress.start();
    return config
})

request.interceptors.response.use((res) => {
    nprogress.done();
    return res.data
}, (err) => {
    return Promise.reject(new Error('faile'))
})

export default request;