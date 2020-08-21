// pages/comp/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        text: "首页",
        iconPath: "/images/tabbar/home.png",
        selectedIconPath: "/images/tabbar/home_cur.png",
        path: "/pages/index/index",
        activeColor:"#08C261",
        dot:false
      },
      {
        text: "元素",
        iconPath: "/images/tabbar/basics.png",
        selectedIconPath: "/images/tabbar/basics_cur.png",
        pagePath: "/pages/element/element",
        selectedColor:"#08C261",
        dot:false,
        info:10
      },
      {
        text: "组件",
        iconPath: "/images/tabbar/component.png",
        selectedIconPath: "/images/tabbar/component_cur.png",
        pagePath: "/pages/comp/comp",
        selectedColor:"#08C261",
        dot:false,
        info:20
      },
      {
        text: "关于",
        iconPath: "/images/tabbar/about.png",
        selectedIconPath: "/images/tabbar/about_cur.png",
        pagePath: "/pages/about/about",
        selectedColor:"#08C261",
        dot:true
      },
    ],
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickTab(e){
    console.log('eeee',e);
    this.setData({
      current:e.detail.index
    })
    wx.showToast({
      title: `切换到标签栏 ${e.detail.index}`,
      icon: 'none',
    });
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