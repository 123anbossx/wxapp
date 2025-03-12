// app.ts
App<IAppOption>({
  globalData: {},
  onShow(){
    console.log('app打开了22')
    // 获取场景值
    const sctreen = wx.getLaunchOptionsSync()
    console.log(sctreen,'获取到的场景值')
    // 获取APP实列
    const app = getApp()
    console.log(app,'app实列')
 
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app打开了111')
    // 登录
    wx.login({
      success: res => {
        console.log(res.code,'88888888')
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})