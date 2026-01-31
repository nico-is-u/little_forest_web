export default {
  pages: [
    /* tabbar页面 */
    'pages/index/index',
    'pages/mine/index',

    /* 其他页面 */
    'pages/guide/index',
  ],
  window: {
    navigationStyle: 'custom',        // 开启自定义导航栏
    backgroundTextStyle: 'black',
    navigationBarBackgroundColor: 'white',
    navigationBarTitleText: '',
  },
  tabBar:{
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  }
}
