//index.js
//获取应用实例
const hotVideo = require('../../compente/hotVideo/hotVideo.js')
const app = getApp()
var SeasonIndex = 3
const util =require('../../utils/util.js')

Page({
  data: {
    search_txt: "",
    active: true,
    activeTab: 0,
    hotVideo: hotVideo,
    toThemData: [],
    visual: null,
    week: ['日', '一', '二', '三', '四', '五', '六'],
    toDay: null,
    dayActiveIndex: null,
    dayIndex: 3,
    dayActive: true,
    clickWeeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    indexesItem: [
      {styleName:'搞笑',style_id:10021}, {styleName:'热血',style_id:10016},
      {styleName:'奇幻',style_id:10018}, {styleName:'励志',style_id:10039},
      {styleName:'萌系',style_id:10024}, {styleName:'运动',style_id:10038}
    ],
    seasonsList: [],
    refreshSeasonIndex: 0,
    refreshSeason: 3,
    // weekIndex: null


  },
  toSearch: function(){
    wx.navigateTo({
      url: '../toSearch/toSearch',
    })
  },
  
  navActive: function (e) {
    if (e.currentTarget.dataset['index'] != 0) {
      this.setData({
        active: false,
        activeTab: 1
      })
    } else {
      this.setData({
        active: true,
        activeTab: 0
      })
    }
  },
  bindchange: function (e) {
    if (e.detail.current != 0) {
      this.setData({
        active: false,
        activeTab: 1
      })
    } else {
      this.setData({
        active: true,
        activeTab: 0
      })
    }
    console.log(this.data.dayActiveIndex)
    console.log(this.data.seasonsList)
  },
  getToday: function () {

    var now = new Date()
    var day = now.getDay()
    if(day==0) day=7
    this.setData({
      toDay: this.data.week[day],
      dayActiveIndex: day,
      // weekIndex:day
    })
    
  },
  dayActive: function (e) {
    var that = this
    console.log(e.target.dataset['dayindex'])
    console.log(e.target.dataset['week'])
    switch (e.target.dataset['week']) {
      case "一":
        that.setData({
          dayActiveIndex: 1
        })
        break;
      case "二":
        that.setData({
          dayActiveIndex: 2
        })
        break;
      case "三":
        that.setData({
          dayActiveIndex: 3
        })
        break;
      case "四":
        that.setData({
          dayActiveIndex: 4
        })
        break;
      case "五":
        that.setData({
          dayActiveIndex: 5
        })
        break;
      case "六":
        that.setData({
          dayActiveIndex: 6
        })
        break;
      case "日":
        that.setData({
          dayActiveIndex: 7
        })
        break;
    }
    if (e.target.dataset['dayindex'] != this.data.dayActiveIndex) {
      this.setData({
        dayActive: false,
        dayIndex: e.target.dataset['dayindex']
      })
    }
    console.log(this.data.dayActiveIndex + " " + this.data.dayIndex)

  },

  refreshWeek: function () {
    var that = this
    var toDayfrontthree = that.data.dayActiveIndex - 3;
    var newWeek = []
    var newClickWeeks = []
    if (toDayfrontthree < 0) {
      for (var i = that.data.week.length - Math.abs(toDayfrontthree); i < that.data.week.length; i++) {
        newWeek.push(that.data.week[i]);
        newClickWeeks.push(that.data.clickWeeks[i])
      }
      for (var i = 0; i < that.data.week.length - Math.abs(toDayfrontthree); i++) {
        newWeek.push(that.data.week[i]);
        newClickWeeks.push(that.data.clickWeeks[i])
      }

    } else if (toDayfrontthree > 0) {
      for (var i = toDayfrontthree; i < that.data.week.length; i++) {
        newWeek.push(that.data.week[i]);
        newClickWeeks.push(that.data.clickWeeks[i])
      }

      for (var i = 0; i < toDayfrontthree; i++) {
        newWeek.push(that.data.week[i]);
        newClickWeeks.push(that.data.clickWeeks[i])
      }

    } else {
      newWeek = that.data.week
      newClickWeeks = that.data.clickWeeks
    }
    that.setData({
      week: newWeek,
      clickWeeks: newClickWeeks
    })
    console.log(that.data.week, that.data.clickWeeks)
  },

  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    var that = this
    console.log(that.data.hotVideo)
    wx.request({
      url: 'https://bangumi.bilibili.com/web_api/timeline_global',
      success: res => {
        var weekArr = []
        // 去重数组
        for (let j = 1; j <= 7; j++) {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].day_of_week == j) {
              weekArr.push(res.data.result[i])
              break
            }

          }
          // console.log(res.data.result[i].day_of_week)
        }

        console.log(weekArr)
        that.setData({
          toThemData: weekArr
        })
        console.log(that.data.toThemData)
      }
    })
    wx.request({
      url: 'https://api.bilibili.com/pgc/season/rank/web/list?season_type=1&day=3',
      success: res => {
        that.setData({
          seasonsList: res.data.data
        })
        console.log(that.data.seasonsList)
      }
    })

    that.getToday()
    that.refreshWeek()
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.windowHeight)
        that.setData({
          visual: result.windowHeight
        })

      },

    })

  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
    this.refreshSeason()
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
  cartoonShow: function (e) {
    app.globalData.playid = e.currentTarget.dataset['playid']
    app.globalData.historyList.unshift(e.currentTarget.dataset['historylist'])
    var myDate = new Date();
    var mytime=myDate.toLocaleString();  
    app.globalData.clickDateList.unshift(mytime)
   
    // app.globalData.historyList.reverse()
    console.log(app.globalData.historyList)
    wx.navigateTo({
      url: '../cartoonShow/cartoonShow',
      success: () => {
        console.log("正在跳转" + e.currentTarget.dataset['playid'])
      }
    })
  },
  viewMore: function () {
    wx.reLaunch({
      url: '../viewAll/viewAll',
    })

  },

  refreshSeason: function () {
    if (SeasonIndex > 30) SeasonIndex = 0
    var newRefreSeason = SeasonIndex + 3
    this.setData({
      refreshSeasonIndex: SeasonIndex,
      refreshSeason: newRefreSeason
    })
    SeasonIndex += 3
    console.log(this.data.refreshSeasonIndex, this.data.refreshSeason)
  },
  styleActive: function(e){
    
    app.globalData.styleActive =this.data.indexesItem[e.currentTarget.dataset.styleactiveindex]

    wx.navigateTo({
      url: '../viewAll/viewAll',
    })
  }

})
