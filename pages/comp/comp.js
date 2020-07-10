// comp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toPage(e){
    const {
      page
    }=e.currentTarget.dataset;
    wx.navigateTo({
      url: page
    });
  }
  
})