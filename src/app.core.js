import Taro from '@tarojs/taro'

// 检查并显示引导页的方法
export const checkAndShowGuide = (options) => {

    // 获取引导页状态 key
    const GUIDE_STORAGE_KEY = 'show_guide'

    // 从 storage 中读取状态
    const showGuide = Taro.getStorageSync(GUIDE_STORAGE_KEY)
    console.log('📖 引导页状态:', showGuide === '' ? '未设置(首次启动)' : showGuide)

    // 检查是否需要显示引导页
    // 1. 首次启动 (storage 中没有值)
    // 2. 接口设置为 true
    const shouldShowGuide = showGuide === '' || showGuide === true

    
}

