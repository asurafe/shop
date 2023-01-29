// api接口统一管理
import request from "./request";

// 三级联动接口 /api/product/getBaseCategoryList 
export const getCategoryList = () => {
    return request({ 
        url: '/product/getBaseCategoryList', 
        method: 'get' 
    })
}