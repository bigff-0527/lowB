// pages/viewAll/viewAll.js
const app = getApp()
var seasonDownIndex = 45
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seasonsList:[],
    pagesize:30,
    visual:null,
    seasonNavItemFlag:null,
    // navItemAllType:['全部','正片','剧场版','其他'],
    season_versionList:[
      {name:'全部',season_version:-1,pagesi:30},
      {name:'正片',season_version:1,pagesi:30},
      {name:'剧场版',season_version:2,pagesi:30},
      {name:'其他',season_version:3,pagesi:30}
    ],
    navItemAllTypeflag:true,
    navItemAllTypeIndex:0,
    // navItemAllStyle:['全部','原创','漫画改','小说改','游戏改','布袋戏','热血'
    //                 ,'穿越','奇幻','战斗','搞笑','日常','科幻','萌系'
    //                 ,'治愈','校园','少儿','泡面','恋爱','少女','魔法'
    //                 ,'冒险','历史','架空','机战','神魔','声控','运动'
    //                 ,'励志','音乐','推理','社团','智斗','催泪','美食'
    //                 ,'偶像','乙女','职场'],
    styleList:[
      {name:'全部',pagezi:30,style_id:-1},{name:'原创',pagezi:30,style_id:10010},
      {name:'漫画改',pagezi:30,style_id:10011},{name:'小说改',pagezi:30,style_id:10012},
      {name:'游戏改',pagezi:30,style_id:10013},{name:'布袋戏',pagezi:30,style_id:10015},
      {name:'热血',pagezi:30,style_id:10016},{name:'穿越',pagezi:30,style_id:10017},
      {name:'奇幻',pagezi:30,style_id:10018},{name:'战斗',pagezi:30,style_id:10020},
      {name:'搞笑',pagezi:30,style_id:10021},{name:'日常',pagezi:30,style_id:10022},
      {name:'科幻',pagezi:30,style_id:10023},{name:'萌系',pagezi:30,style_id:10024},
      {name:'治愈',pagezi:30,style_id:10025},{name:'校园',pagezi:30,style_id:10026},
      {name:'少儿',pagezi:30,style_id:10027},{name:'泡面',pagezi:30,style_id:10028},
      {name:'恋爱',pagezi:30,style_id:10029},{name:'少女',pagezi:30,style_id:10030},
      {name:'魔法',pagezi:30,style_id:10031},{name:'冒险',pagezi:30,style_id:10032},
      {name:'历史',pagezi:30,style_id:10033},{name:'架空',pagezi:30,style_id:10034},
      {name:'机战',pagezi:30,style_id:10035},{name:'神魔',pagezi:30,style_id:10036},
      {name:'声控',pagezi:30,style_id:10037},{name:'运动',pagezi:30,style_id:10038},
      {name:'励志',pagezi:30,style_id:10039},{name:'音乐',pagezi:30,style_id:10040},
      {name:'推理',pagezi:30,style_id:10041},{name:'社团',pagezi:30,style_id:10042},
      {name:'智斗',pagezi:30,style_id:10043},{name:'催泪',pagezi:30,style_id:10044},
      {name:'美食',pagezi:30,style_id:10045},{name:'偶像',pagezi:30,style_id:10046},
      {name:'乙女',pagezi:30,style_id:10047},{name:'职场',pagezi:30,style_id:10048}
    ],
    navItemAllStyleflag:true,
    navItemAllStyleIndex:0,
    // navItemAllState:['全部','完结','连载'],
    is_finishList :[
      {name:"全部",is_finish:-1,pagezi:30 },
      {name:"完结",is_finish:1,pagezi:30 },
      {name:"连载中",is_finish:0,pagezi:30 }
    ],
    navItemAllStateflag:true,
    navItemAllStateIndex:0,
    clickIndex:0,
  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    if(app.globalData.styleActive!=null){
      console.log(app.globalData.styleActive.style_id)
      var styleListIndex;
      for (let index = 0; index < that.data.styleList.length; index++) {
        if(that.data.styleList[index].style_id===app.globalData.styleActive.style_id){
          styleListIndex = index;
          break
        }
      }
      that.setData({
        navItemAllStyleIndex:styleListIndex,
        navItemAllStyleflag:false
      })
      app.globalData.styleActive=null
    }
    
    // that.setData({

    // })
    wx.request({
      url: 'https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=200&type=1',
      data:{
        pagesize:that.data.pagesize,
        season_version : that.data.season_versionList[that.data.navItemAllTypeIndex].season_version,
        style_id : that.data.styleList[that.data.navItemAllStyleIndex].style_id,
        is_finish :  that.data.is_finishList[that.data.navItemAllStateIndex].is_finish,
      },
      success: res => {
        that.setData({
          seasonsList:res.data.data.list
        })
        console.log(that.data.seasonsList)
      }
    })
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.windowWidth)
        that.setData({
           visual:result.windowHeight
         })
 
      },
    })
  

  },
  seasonNavItemClick: function(e) {
    var that = this 
    if(that.data.seasonNavItemFlag ==  e.currentTarget.dataset['seasonnavitemindex'])
    that.setData({
      seasonNavItemFlag:null
    })
    else{
      that.setData({
        seasonNavItemFlag : e.currentTarget.dataset['seasonnavitemindex']
      })
    }
   
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  selectClick: function(e){
    var that = this 
    var pageSize = 30;
    if(e.currentTarget.dataset.clicktypeindex!=null)
    that.setData({
      navItemAllTypeIndex : e.currentTarget.dataset.clicktypeindex,
      navItemAllTypeflag:false
    })
    if(e.currentTarget.dataset.clickstyleindex!=null)
    that.setData({
      navItemAllStyleIndex : e.currentTarget.dataset.clickstyleindex,
      navItemAllStyleflag:false
    })
    if(e.currentTarget.dataset.clickstateindex!=null)
    that.setData({
      navItemAllStateIndex : e.currentTarget.dataset.clickstateindex,
      navItemAllStateflag:false
    })
    console.log(that.data.navItemAllTypeIndex)
    console.log(that.data.navItemAllStyleIndex)
    console.log(that.data.navItemAllStateIndex)
    // var season_version = that.data.navItemAllTypeIndex
    // if(season_version==0)  season_version = -1
    // var style_id = that.data.navItemAllStyleIndex
    // if(style_id==0) style_id  = -1
    // var is_finish = that.data.navItemAllStateIndex
    // if(that.data.navItemAllStateIndex==2) is_finish = 0
    // if(that.data.navItemAllStateIndex==0) is_finish  = -1
    wx.request({
      url: 'https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=20&type=1',
      data:{
        pagesize:pageSize,
        season_version : that.data.season_versionList[that.data.navItemAllTypeIndex].season_version,
        style_id : that.data.styleList[that.data.navItemAllStyleIndex].style_id,
        is_finish :  that.data.is_finishList[that.data.navItemAllStateIndex].is_finish,
      },
      success: res => {
        console.log(res.data.data.list)
        if(res.data.data.list!=null)
        that.setData({
          seasonsList:res.data.data.list
        })
        else
        that.setData({
          seasonsList:null
        })

      }
    })
    
  },
  cartoonShow: function(e){
    app.globalData.playid=e.currentTarget.dataset.playid
    app.globalData.historyList.unshift(e.currentTarget.dataset['historylist'])
    var myDate = new Date();
    var mytime=myDate.toLocaleString();  
    app.globalData.clickDateList.unshift(mytime)
   
    // app.globalData.historyList.reverse()
    wx.navigateTo({
      url: '../cartoonShow/cartoonShow',
    })
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
    var that = this
    that.setData({
      pagesize:seasonDownIndex
    })
    that.onReachBottomGetSeason()
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  onReachBottomGetSeason: function() {
    var that = this
    // var season_version = that.data.navItemAllTypeIndex
    // if(season_version==0)  season_version = -1
    // var style_id = that.data.navItemAllStyleIndex
    // if(style_id==0) style_id  = -1
    // var is_finish = that.data.navItemAllStateIndex
    // if(that.data.navItemAllStateIndex==2) is_finish = 0
    // if(that.data.navItemAllStateIndex==0) is_finish  = -1
    wx.request({
      url: 'https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=200&type=1',
      data:{
        pagesize:that.data.pagesize,
        season_version : that.data.season_versionList[that.data.navItemAllTypeIndex].season_version,
        style_id : that.data.styleList[that.data.navItemAllStyleIndex].style_id,
        is_finish :  that.data.is_finishList[that.data.navItemAllStateIndex].is_finish,
      },
      success: res => {
        that.setData({
          seasonsList:res.data.data.list
        })
        seasonDownIndex +=15
        console.log(that.data.seasonsList)
      }
    })
  }
})