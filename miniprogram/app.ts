// app.ts
App<IAppOption>({
  globalData: {
    observers:[],
    userMap:new Map(),
  },
  changeuserInfo(){
      // this.globalData.userList[0].name= '脏三'
      console.log('修改数据')
      const userInfo:usertype= {
        userId:'1234',
        userName:'张三'+new Date().getTime(),
        userRole:4,
        showAudio:false,
        showVideo:true,
        oldWeight:20,
        newWeight:10,
      }
      this.globalData.userMap?.set(userInfo.userId,userInfo)
      this.notifyObservers(userInfo.userId)
  },
  // 注册观察者
 registerObserver(observer){
  this.globalData.observers.push(observer); // 注册观察者
 },
 // 通知所有观察者
 notifyObservers(userId:string){
  this.globalData.observers.forEach(observer => observer(userId))
 },
  onShow(){
    console.log('app打开了22')
    // 获取场景值
    const sctreen = wx.getLaunchOptionsSync()
    console.log(sctreen,'获取到的场景值')
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