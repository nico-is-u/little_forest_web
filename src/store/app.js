import { defineStore } from 'pinia'
import HTTP from '../utils/request'

export default defineStore('app', {
    state: () => ({
        isShowGuide: false,
    }),

    actions:{
        // 获取APP基础信息
        async getAppData(){
            const res = await HTTP.get('app/info')
            console.log(res)
            return res.data
        },
    }
})