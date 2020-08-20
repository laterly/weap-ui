// components/collapse/collapse.js
 /**
   * tag 标签
   * price 价格
   * title 标题
   * desc 描述
   * thumb 图片
   */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:{
      type:Array,
      value:[]
    },
    price:{
      type:String,
      value:""
    },
    title:{
      type:String,
      value:""
    },
    desc:{
      type:String,
      value:""
    },
    thumb:{
      type:String,
      value:"./images/goods.png"
    },
    num:{
      type:String,
      value:""
    },
    picTag:{
      type:String,
      value:""
    },
    originPrice:{
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
    privePic(){
      this.triggerEvent('pic',this.data.thumb);
    }
  }
})
