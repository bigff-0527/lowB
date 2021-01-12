// pages/profiles/profiles.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:null,
    userInfo:null
  },
  onTabItemTap(item){
    var that = this
    that.setData({
      historyList:app.globalData.historyList
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      historyList:app.globalData.historyList
    })
    
  },
  viewMore: function () {
    wx.reLaunch({
      url: '../history/history',
      success: ()=>{
        wx.setNavigationBarTitle({
          title: '历史记录',
        })
      }
    })
  },
  videoShow: function (e) {
    app.globalData.bvid = e.currentTarget.dataset['bvid']
    var flag = true;
    var dateIdex = null;
    if(app.globalData.historyList.length>0){
       
      for (let index = 0; index < app.globalData.historyList.length; index++) {
        // if(app.globalData.historyList[index].aid===e.currentTarget.dataset['historylist'].aid){
        //   continue;
        // }
        if(app.globalData.historyList[index].aid==e.currentTarget.dataset['historylist'].aid){
          console.log(app.globalData.historyList[index].aid)
          flag = false
          dateIdex = index
          break
        }
      }
      if(flag){
        app.globalData.historyList.unshift(e.currentTarget.dataset['historylist'])
        var myDate = new Date();
        var mytime=myDate.toLocaleString();  
        app.globalData.clickDateList.unshift(mytime)
      }
      else{
        var myDate = new Date();
        var mytime=myDate.toLocaleString();  
        app.globalData.historyList.splice(dateIdex,1)
        app.globalData.clickDateList.splice(dateIdex,1)
        app.globalData.historyList.unshift(e.currentTarget.dataset['historylist'])
        app.globalData.clickDateList.unshift(mytime)
      }
    }else{
      app.globalData.historyList.unshift(e.currentTarget.dataset['historylist'])
      var myDate = new Date();
      var mytime=myDate.toLocaleString();  
      app.globalData.clickDateList.unshift(mytime)
     
    }
    // app.globalData.historyList.reverse()
    console.log(app.globalData.historyList)
    console.log(app.globalData.clickDateList)

    wx.navigateTo({
      url: '../videoShow/videoShow',
      success: () => {
        console.log("正在跳转" + e.currentTarget.dataset['bvid'])
      }
    })
  },
  getUserInfo: function(e){
    console.log(e)
    // wx.setStorage({
    //   data: e.detail.userInfo,
    //   key: 'userInfo',
    // })
    this.setData({
      userInfo:e.detail.userInfo
    })

  },
  logOut: function(){
    // wx.clearStorage({
    //   success: (res) => {
    //     console.log("退出成功")
    //   },
    // })
    this.setData({
      userInfo:null
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})