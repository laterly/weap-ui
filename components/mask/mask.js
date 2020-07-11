// components/mask/mask.js
/**
 * show 显示隐藏
 * maskColor 遮罩颜色
 * zIndex 层级
 * transparent 透明背景
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    maskColor: {
			type: String,
			value: "rgba(24, 26, 27, 0.6);"
    },
    zIndex: {
			type: Number,
			value: 9999
    },
    transparent:{
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
    clickModal(){
      this.triggerEvent('close');
    }
  }
})
