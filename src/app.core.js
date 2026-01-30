import Taro from '@tarojs/taro'

// 检查并显示引导页的方法
export const checkAndShowGuide = () => {

    // 获取引导页状态 key
    const GUIDE_STORAGE_KEY = 'show_guide'

    // 从 storage 中读取状态
    const showGuide = Taro.getStorageSync(GUIDE_STORAGE_KEY)
    console.log('📖 引导页状态:', showGuide === '' ? '未设置(首次启动)' : showGuide)

    // 强制引导页
    // if(!showGuide)  Taro.navigateTo({ url: '/pages/guide/index' })
}

