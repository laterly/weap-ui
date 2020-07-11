// tab.js
/**
 * tabs 选项卡数组
 * active 选中的索引
 * onChange 监听选项卡的点击变化
 * type 模式 默认defalut scroll为横向滚动
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    },
    active:{
      type:String,
      value:0
    },
    type:{
      type:String,
      value:'defalut'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollLeft: 0,
    classifyActiveIndex: 0,
    scrollLeft: 0,
    BAR_WIDTH: 68,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e){
      const {
        index
    }=e.currentTarget.dataset;
    console.log('e',e);
      this.triggerEvent('onChange',index);
    },
    toCategory(e) {
      let index = e.currentTarget.dataset.index;
      console.log('index',index);
      this.setSlider(index);
      this.triggerEvent('onChange', index)
    },
    setSlider(index) {
      this.scrollLeft = (index - 1) * this.data.BAR_WIDTH;
      this.setData({
        scrollLeft: (index - 1) * this.data.BAR_WIDTH,
        classifyActiveIndex: index
      })
    }
  }
})