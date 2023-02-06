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
// mock获取轮播图数据
export const getBannerList = () => {
    return mockRequest({
        url: '/banner',
        method: 'get'
    })
}
// mock获取下方数据
export const getFloorList = () => {
    return mockRequest({
        url: '/floor',
        method: 'get'
    })
}
// search查询数据
export const getSearchList = (data) => {
    return request({
        url: '/list',
        method: 'post',
        data
    })
}

export const getDetail = (skuId) => {
    return request({
        url: `/item/${skuId}`,
        method: 'get',
    })
}