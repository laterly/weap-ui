// components/submit-bar/submit-bar.js
  /**
   * num 数量
   * price 价格
   * buttonText 按钮文字
   * buttonColor 按钮颜色
   */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:String,
      value:""
    },
    tip:{
      type:String,
      value:""
    },
    price:{
      type:String,
      value:""
    },
    buttonText:{
      type:String,
      value:""
    },
    ifIphoneX:{
      type:Boolean,
      value:false
    },
    buttonColor:{
      type:String,
      value:"#08c261"
    }
  },
  lifetimes: {
    attached() {
      let res = wx.getSystemInfoSync();
      if (res.statusBarHeight >= 44) {
        this.setData({
          ifIphoneX : true
        })
      }

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
    startPay(){
      this.triggerEvent('submit');
    }
  }
})
