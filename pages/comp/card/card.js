// pages/comp/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tag1:['标签1','标签2'],
    tag2:['竹子','陶瓷盆']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickPic(){
      wx.showToast({
        icon:'none',
        title: '点击图片',
      })
    }
  }
})
