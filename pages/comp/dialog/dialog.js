// pages/comp/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:-1,
    show1:false,
    show2:false,
    show3:false,
    show4:false
  },
  openPopup(e){
    const {
      mode
    }=e.currentTarget.dataset;
    this.setData({
      mode:Number(mode),
      [`show${mode}`]:true
    })
  },
  close(){
    const {
      mode
    }=this.data;
    this.setData({
      [`show${mode}`]:false
    })
    wx.showToast({
      title:'点击取消',
      icon:'none'
    })
  },
  confirm(){
    const {
      mode
    }=this.data;
    this.setData({
      [`show${mode}`]:false
    })
    wx.showToast({
      title:'点击确认',
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