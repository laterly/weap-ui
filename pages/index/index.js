//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    components:[
      {
        icon:'icon-all',
        name:'Button按钮',
        page:'/pages/button/button'
      },
      {
        icon: 'icon-cascades',
        name: 'Icon图标',
        page: '/pages/base/base'
      },
      {
        icon: 'icon-list',
        name: 'Cell单元格',
        page: '/pages/cell/cell'
      }
    ]
  },
  onLoad: function () {
    
  },
  goPage(e){
    let {
      page
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: page,
    })
  }
})
