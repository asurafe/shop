// 对axios进行二次封装
import axios from 'axios';

// 创建axios实例
const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.request.use((config)=>{
    return config
})

request.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(new Error('faile'))
})

export default request;