// pages/classifyShow/classifyShow.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classData:null,
    activeTab:0,
    active:true,
    visualHeight:null,
    visualWidth:null
  },
  // bindchange: function(e){
  //   console.log(e.detail.current)
  //   this.setData({
  //     activeTab:e.detail.current
  //   })

  // },
  // navActive: function(e){
  //   console.log(e)
  //   this.setData({
  //     activeTab:e.currentTarget.dataset.navactive
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classData:app.globalData.classActive
    })
    wx.reLaunch({
      url: 'https://m.bilibili.com/channel/'+this.data.classData.rid,
    })
    console.log(this.data.classData)
  //   var that =this
  //   that.setData({
  //     classData:app.globalData.classActive
  //   })
  //   console.log(that.data.classData)
  //   wx.getSystemInfo({
  //     success: (result) => {
  //       console.log(result.windowHeight)
  //       that.setData({
  //         visualHeight: result.windowHeight,
  //         visualWidth: result.windowWidth
  //       })
  //     },
  //   })
  //  if (that.data.activeTab==0) {
  //   wx.request({
  //     url:'https://api.bilibili.com/x/web-interface/ranking/region?rid=33&day=7&context=',
  //     data: {
  //       // rid:that.data.classData.title[0].rid
  //     },
  //     success: (result) => {
  //       console.log(result)
  //     },
  //     fail: (res) => {
  //       console.log(res)
  //     },
  //     complete: (res) => {},
  //   })
  //  }
   




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