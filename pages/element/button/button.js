// button.js
/**
 * Button 按钮
 * openType 微信开放能力
 * isDisabled是否可以点击
 * bind:click 点击按钮
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    openType:{
      type:String,
      value:""
    },
    isDisabled:{
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
    click(){
      this.triggerEvent('click');
    }
  }
})