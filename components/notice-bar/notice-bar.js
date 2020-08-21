// components/notice-bar/notice-bar.js
/**
   * notice数组
   * color: 颜色
   * background 滚动条背景
   * mode 为fade是淡入淡出
   */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    notice:{
      type:Array,
      value:[]
    },
    leftIcon:{
      type:String,
      value:'./images/notice-icon.png'
    },
    showIcon:{
      type:Boolean,
      value:false
    },
    background:{
      type:String,
      value:"#fffbe8"
    },
    color:{
      type:String,
      value:"#ed6a0c"
    },
    size:{
      type:String,
      value:"28rpx"
    },
    textAlign:{
      type:String,
      value:"left"
    },
    mode:{
      type:String,
      value:""
    }
  },
  lifetimes: {
    attached() {
      if(this.data.mode=='fade'){
        this.setNoticeAnimate();
      }
     
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    noticeIndex:0,
    isHideNotice:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    preventDefault(){},
    setNoticeAnimate() {
      this.removeNoticeAnimate();
      this.data.noticeInterval = setInterval(() => {
        this.setData({
          isHideNotice: true,
        });
      }, 3000);
    },
    removeNoticeAnimate() {
      clearInterval(this.data.noticeInterval);
    },
    noticeAnimateEnd() {
      if (this.data.isHideNotice) {
        let { notice, noticeIndex } = this.data;
        this.setData({
          noticeIndex: noticeIndex < notice.length - 1 ? noticeIndex + 1 : 0,
          isHideNotice: false,
        });
      }
    },
  }
})
