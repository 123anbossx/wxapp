/// <reference path="./types/index.d.ts" />
interface usertype {
  userId:string,
  userName:string,
  userRole:number,
  showAudio:boolean,
  showVideo:boolean,
  oldWeight:number
  newWeight:number,
}
interface IAppOption {
  globalData: {
    observers:Array<(userId:string)=>void>
    userMap?:Map<string,usertype>
  },
  changeuserInfo:()=>void
  registerObserver:(observer:(userId:string)=>void)=>void
  notifyObservers:(userId:string)=>void
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}