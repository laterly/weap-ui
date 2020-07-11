// components/dialog/dialog.js
/**
 * dialog
 * show显示隐藏
 * modal是否显示遮罩
 * close-on-click-modal 是否可以通过点击 modal 层来关闭 popup
 * close         遮罩隐藏的回调函数
 * showSlot 是否内容自定义
 * showCancel 是否取消按钮
 * showConfirm 是否确认按钮
 * cancelText 取消按钮文字
 * confirmText 确认按钮文字
 * showDesc 是否展示描述
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
    modal:{
      type:Boolean,
      value:true
    },
    closeOnClickModal:{
      type:Boolean,
      value:true
    },
    title:{
      type:String,
      value:'标题'
    },
    showTitle:{
      type:Boolean,
      value:true
    },
    showDesc:{
      type:Boolean,
      value:false
    },
    content:{
      type:String,
      value:""
    },
    desc:{
      type:String,
      value:'这里是描述'
    },
    showSlot:{
      type:Boolean,
      value:false
    },
    showCancel:{
      type:Boolean,
      value:true
    },
    showConfirm:{
      type:Boolean,
      value:true
    },
    cancelText:{
      type:String,
      value:'取消'
    },
    confirmText:{
      type:String,
      value:'确认'
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
    close(){
      this.triggerEvent('close');
    },
    sure(){
      this.triggerEvent('confirm');
    }
  }
})
