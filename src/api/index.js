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

export const addOrUpdateShopCart = (skuId, skuNum) => {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: "post"
    })
}

//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get 
export const reqCartList = () => {
    return request({
        url: '/cart/cartList ',
        method: 'get'
    });
}

//删除购物产品的接口
export const reqDeleteCartById = (skuId) => {
    return request({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
};
//修改商品的选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) => {
    return request({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
};