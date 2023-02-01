// api接口统一管理
import request from "./request";
import mockRequest from "./mock"
// 三级联动接口 /api/product/getBaseCategoryList 
export const getCategoryList = () => {
    return request({ 
        url: '/product/getBaseCategoryList', 
        method: 'get' 
    })
}

export const getBannerList = () => {
    return mockRequest({ 
        url: '/banner', 
        method: 'get' 
    })
}

export const getFloorList = () => {
    return mockRequest({
        url: '/floor',
        method: 'get'
    })
}