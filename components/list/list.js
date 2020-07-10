// list.js
/**
 * list列表 
 * left-icon 左边的图标
 * right-icon 左边的图标
 * title 标题
 * label 描述
 * is-link 是否展示右侧箭头
 * 
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftIcon:{
      type:String,
      value:""
    },
    rightIcon:{
      type:String,
      value:"./images/ic_black.png"
    },
    title:{
      type:String,
      value:""
    },
    isLink:{
      type:Boolean,
      value:false
    },
    label:{
      type:String,
      value:""
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

  }
})