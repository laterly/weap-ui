/*
*popup弹出层组件
*mode 有几种弹出模式 left right bottom center
*mask 是否展示遮罩
*maskClosable 点击遮罩是否关闭
*/
Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mode: {
      type: String,
      value: 'left' 
    }
  },
  data: {},
  methods: {
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return;
      }
      this.triggerEvent('close', {});
    }
  }
});