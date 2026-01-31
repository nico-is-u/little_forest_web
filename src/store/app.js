import { defineStore } from 'pinia'
import Taro from '@tarojs/taro'
import HTTP from '../utils/request'

export default defineStore('app', {
    state: () => ({
        /* 是否（在当前版本）展示引导信息 */
        isShowGuide: false,

        /* tabbar信息组 */
        tabbarName:'index',
        tabbarDatas:[
            {
                title:'首页',
                name:'index',
                activeIcon:'icon-houses-filled',
                icon:'icon-houses',
                path:'/pages/index/index',
                dot:false,                          // 是否渲染提示园点
                value:0,                            // 是否渲染提示数量
            },
            {
                title:'我的',
                name:'mine',
                activeIcon:'icon-user-1-filled',
                icon:'icon-user',
                path:'/pages/mine/index',
                dot:false,                          // 是否渲染提示园点
                value:0,                            // 是否渲染提示数量
            }
        ],
    }),

    actions:{
        // 获取APP基础信息
        async getAppData(){
            const res = await HTTP.get('app/info')
            console.log(res)
            return res.data
        },

        // 设置tabbar
        setTabbar(name){
            const index = this.tabbarDatas.findIndex(item => item.name === name)
            if (index !== -1) {
                const targetItem = this.tabbarDatas[index]
                /* 切换tab页 */
                Taro.switchTab({url: targetItem.path})
                /* 设置高亮key */
                this.tabbarName = name
            }
        },

    },

    
})