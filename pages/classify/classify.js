// pages/classify/classify.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList:[
      {name:'番剧',img:'/image/FanOpera.png',rid:'13',title:
            [{name:'推荐',rid:''},{name:'连载动画',rid:'33'},
            {name:'完结动画',rid:32},{name:'资讯',rid:51},
            {name:'官方延伸',rid:152}]
      },
      {name:'国创',img:'/image/country.png',rid:'167',title:
            [{name:'推荐',rid:''},{name:'国产动画',rid:153},
            {name:'国产原创相关',rid:168},{name:'布袋戏',rid:169},
            {name:'动态漫·广播剧',rid:169},{name:'资讯',rid:170}]
      },
      {name:'纪录片',img:'/image/documentary.png',rid:'177',title:
            [{name:'推荐',rid:''},{name:'人文·历史',rid:37},
            {name:'科学·探索·自然',rid:178},{name:'军事',rid:179}
            ,{name:'社会·美食·旅行',rid:180}]
      },
      {name:'动画',img:'/image/animation.png',rid:'1',title:
      [{name:'推荐',rid:''},{name:'MAD·AMV',rid:24},
      {name:'MMD·3D',rid:25},{name:'短片·手书·配音',rid:47},
      {name:'手办·模玩',rid:210},{name:'特摄',rid:86},{name:'综合',rid:27}]
      },
      {name:'音乐',img:'/image/music.png',rid:'3',title:
      [{name:'推荐',rid:''},{name:'原创音乐',rid:28},
      {name:'翻唱',rid:31},{name:'VOCALOID·UTAU',rid:30},{name:'电音',rid:194},
      {name:'演奏',rid:59},{name:'MV',rid:193},
      {name:'音乐现场',rid:29},{name:'音乐综合',rid:130}]
      },
      {name:'舞蹈',img:'/image/dance.png',rid:'129',title:
      [{name:'推荐',rid:''},{name:'宅舞',rid:20},
      {name:'街舞',rid:198},{name:'明星舞蹈',rid:199},{name:'中国舞',rid:200},
      {name:'舞蹈综合',rid:154},{name:'舞蹈教程',rid:156}]
      },
      {name:'游戏',img:'/image/game.png',rid:'4',title:
      [{name:'推荐',rid:''},{name:'单机游戏',rid:17},{name:'电子竞技',rid:171},
      {name:'手机游戏',rid:172},{name:'网络游戏',rid:65},{name:'桌游棋牌',rid:173},
      {name:'GMV',rid:121},{name:'音游',rid:136},{name:'Mugen',rid:19}
      ]},
      {name:'知识',img:'/image/knowledge.png',rid:'36',title:[
        {name:'推荐',rid:''},{name:"科学科普",rid:201},{name:'社科人文',rid:124},
        {name:'财经',rid:207},{name:'校园学习',rid:208},{name:'职业职场',rid:209},
        {name:'野生技术协会',rid:122}
      ]},
      {name:'数码',img:'/image/Digital.png',rid:'188',title:[
        {name:'推荐',rid:''},{name:'手机平板',rid:95},{name:'电脑装机',rid:189},
        {name:'摄影摄像',rid:190},{name:'影音智能',rid:191}
      ]},
      {name:'生活',img:'/image/life.png',rid:'160',title:[
        {name:'推荐',rid:''},{name:'搞笑',rid:138},{name:'日常',rid:21},
        {name:'动物圈',rid:75},{name:'手工',rid:161},{name:'绘画',rid:162},
        {name:'运动',rid:163},{name:'汽车',rid:176},{name:'其他',rid:174},
      ]},
      {name:'美食',img:'/image/food.png',rid:'211',title:[
        {name:'推荐',rid:''},{name:'美食制作',rid:76},{name:'美食侦探',rid:212},
        {name:'真香测评',rid:213},{name:'田园美食',rid:214},{name:'美食记录',rid:215},
      ]},
      {name:'鬼畜',img:'/image/Ghost.png',rid:'119',title:[
        {name:'推荐',rid:''},{name:'鬼畜调教',rid:22},{name:'音MAD',rid:26},
        {name:'人力VOCALOID',rid:126},{name:'鬼畜剧场',rid:216},{name:'教程演示',rid:127},
      ]},
      {name:'时尚',img:'/image/fashion.png',rid:'155',title:[
        {name:'推荐',rid:''},{name:'美妆',rid:157},{name:'服饰',rid:158},
        {name:'健生',rid:164},{name:'T台',rid:159},{name:'风尚标',rid:192},
      ]},
      {name:'娱乐',img:'/image/entertainment.png',rid:'5',title:[
        {name:'推荐',rid:''},{name:'综艺',rid:71},{name:'明星',rid:137}
      ]},
      {name:'影视',img:'/image/Movies.png',rid:'181',title:[
        {name:'推荐',rid:''},{name:'影视杂谈',rid:182},{name:'影视剪辑',rid:183},
        {name:'短片',rid:85},{name:'预告资讯',rid:184}
      ]},
      {name:'电影',img:'/image/film.png',rid:'23',title:[
        {name:'推荐',rid:''},{name:'华语电影',rid:147},{name:'欧美电影',rid:145},
        {name:'日本电影',rid:146},{name:'其他国家',rid:83}
      ]},
      {name:'电视剧',img:'/image/TV.png',rid:'11',title:[
        {name:'推荐',rid:''},{name:'国产剧',rid:185},{name:'海外',rid:187},
      ]},
      {name:'游戏赛事',img:'/image/match.png',rid:'-1',title:[
        {name:'推荐',rid:185}
      ]}
      
    ]
  },
  classActive: function(e){
    console.log(e.currentTarget.dataset.classactive)
    app.globalData.classActive = e.currentTarget.dataset.classactive
    wx.redirectTo({
      url: '../classifyShow/classifyShow',
      success: ()=>{
        wx.setNavigationBarTitle({
          title: app.globalData.classActive.name
        })
      }
    })

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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