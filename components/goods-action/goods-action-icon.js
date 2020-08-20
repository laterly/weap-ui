// components/goods-action/goods-action-icon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon:{
      type:String,
      value:""
    },
    text:{
      type:String,
      value:""
    },
    info:{
      type:String,
      value:""
    },
    dot:{
      type:Boolean,
      value:false
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
    clickIcon(e){
      let {item}=e.currentTarget.dataset;
      this.triggerEvent('clickIcon',item);
    }
  }
})
