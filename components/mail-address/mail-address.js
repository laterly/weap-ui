// components/mail-address/mail-address.js
/**
   * title
   * desc
   */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"添加收货信息"
    },
    desc:{
      type:String,
      value:'商品配送方式：顺丰快递'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      this.triggerEvent('click');
    }
  }
})
