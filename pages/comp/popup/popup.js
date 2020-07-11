// pages/comp/popup/popup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:false,
    right:false,
    bottom:false,
    middle:false,
    center:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  openPopup(e){
    console.log('e',e);
    const {
      mode
    }=e.currentTarget.dataset;
    this.setData({
      [`${mode}`]:mode
    })
  },
  close(){
    this.setData({
      bottom:false
    });
    this.setData({
      left:false
    });
    this.setData({
      right:false
    });
    this.setData({
      middle:false
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