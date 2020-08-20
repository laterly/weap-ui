// components/goods-action/goods-action.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buttonBar:{
      type:Array,
      value:['立即购买']
    },
    ifIphoneX:{
      type:Boolean,
      value:false
    },
    disabled:{
      type:Boolean,
      value:false
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
    clickButton(e){
      let {item}=e.currentTarget.dataset;
      this.triggerEvent('clickButton',item);
    }
  }
})
