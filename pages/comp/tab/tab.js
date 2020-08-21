// tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs2:['选项卡一',"选项卡二","选项卡三","选项卡四"],
    tabs3:['选项卡一',"选项卡二","选项卡三","选项卡四","选项卡五","选项卡六"],
    tabs:['选项卡一',"选项卡二","选项卡三","选项卡四",'选项卡五',"选项卡六","选项卡七","选项卡八"],
    current:0,
    current2:0,
    current3:0,
  },
  onChangeCate(e){
    this.setData({
      current:e.detail
    })
    wx.showToast({
      title: `切换到选项 ${e.detail}`,
      icon: 'none',
    });
  },
  onChangeCate2(e){
    this.setData({
      current2:e.detail
    })
    wx.showToast({
      title: `切换到选项 ${e.detail}`,
      icon: 'none',
    });
  },
  onChangeCate3(e){
    this.setData({
      current3:e.detail
    })
    wx.showToast({
      title: `切换到选项 ${e.detail}`,
      icon: 'none',
    });
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