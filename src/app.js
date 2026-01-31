import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Taro from '@tarojs/taro'

import './app.scss'

/* App Core */
import { checkAndShowGuide } from './app.core'

/* 业务相关 */
import _AppStore from './store/app'

const App = createApp({
  onLaunch(options) {

    console.log('=================================')
    console.log('🚀 小森邻应用启动')
    console.log('=================================')

    // 🆕 检查是否需要显示引导页
    checkAndShowGuide(options)
    
    // 获取APP基础信息
    const AppStore = _AppStore()
    AppStore.getAppData()
  },


  onShow2(options) {

    
    // 获取系统信息
    const systemInfo = Taro.getSystemInfoSync()
    console.log('📱 系统信息:', systemInfo)

    // 获取环境信息
    console.log('🌐 当前环境:', process.env.NODE_ENV)

    // 获取路由信息
    console.log('📍 路由参数:', options)

    // 获取平台信息
    const platformMap = {
      'devtools': '开发者工具',
      'android': 'Android',
      'ios': 'iOS',
      'windows': 'Windows',
      'mac': 'macOS'
    }
    console.log('📲 运行平台:', platformMap[systemInfo.platform] || systemInfo.platform)

    // 获取胶囊按钮信息（小程序）
    try {
      const menuButton = Taro.getMenuButtonBoundingClientRect()
      console.log('🔘 胶囊按钮信息:', menuButton)
    } catch (error) {
      console.log('🔘 胶囊按钮信息: H5环境无胶囊按钮')
    }

    console.log('=================================')
    console.log('✅ 应用初始化完成')
    console.log('=================================\n')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const AppPinia = createPinia()


App.use(AppPinia)
export default App
