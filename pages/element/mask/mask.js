// pages/element/mask/mask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1:false,
    show2:false
  },
  openPopup1(){
    wx.showToast({
      title: '打开遮罩',
      icon:'none'
    })
    this.setData({
      show1:true
    })
  },
  openPopup2(){
    wx.showToast({
      title: '打开遮罩',
      icon:'none'
    })
    this.setData({
      show2:true
    })
  },
  close1(){
    this.setData({
      show1:false
    })
    wx.showToast({
      title: '关闭遮罩',
      icon:'none'
    })
  },
  close2(){
    this.setData({
      show2:false
    })
    wx.showToast({
      title: '关闭遮罩',
      icon:'none'
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