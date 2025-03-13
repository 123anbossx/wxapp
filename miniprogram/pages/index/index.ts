// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Component({
  data:{
    userDatas: [] as Array<usertype | undefined>, // 用户数据列表
  },
  lifetimes:{
    attached(){
      app.registerObserver(this.updateUserList.bind(this));
      this.getData()
    }
  },
  methods: {
    // onShow(){
    //    console.log('页面显示出来了')
    // },
    updateUserList(userId:string){
        this.setData({
          [`userDatas[${0}]`]:app.globalData.userMap?.get(userId)
        })
    },
    changename(){
        app.changeuserInfo()
    },
   // 获取数据
   getData(){
       let allUsers:Array<usertype> = []
       app.globalData.userMap?.forEach((value:usertype)=>{
          allUsers.push(value)
       })
       this.setData({
          userDatas:allUsers
       })
   },
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  },
})
