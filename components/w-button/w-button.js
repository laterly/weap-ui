// button.js
/**
 * Button按钮
 * isDisabled 是否禁止点击
 * 
 * 
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isDisabled:{
      type:Boolean,
      value:false
    },
    type:{
      type:String,
      value:''
    },
    isLoading:{
      type:Boolean,
      value:false
    },
    openType:{
      type:String,
      value:"default"
    },
    round:{
      type: Boolean,
      value: false
    },
    size:{
      type:String,
      value:''
    },
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