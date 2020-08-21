// tab.js
/**
 * tabs 选项卡数组
 * current 选中的索引
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
    current:{
      type:String,
      value:0
    },
    type:{
      type:String,
      value:'defalut'
    },
    activeColor:{
      type:String,
      value:'#FF7394'
    },
    subColor:{
      type:String,
      value:'#FFF0F4'
    },
    isShowRight:{
      type:Boolean,
      value:true
    },
    isSide:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollLeft: 0,
    scrollLeft: 0,
    BAR_WIDTH: 70,
    isOpen:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeBar(){
      this.setData({
        isOpen:!this.data.isOpen
      })
    },
    changeTab(e){
      const {
        index
    }=e.currentTarget.dataset;
      this.triggerEvent('onChange',index);
    },
    toCategory(e) {
      let {index,catId,type} = e.currentTarget.dataset;
      console.log('index',index);
      this.setSlider(index);
      this.triggerEvent('onChange', catId);
      if(type==2) this.changeBar();
    },
    setSlider(index) {
      this.scrollLeft = (index - 1) * this.data.BAR_WIDTH;
      this.setData({
        scrollLeft: (index - 1) * this.data.BAR_WIDTH,
      })
    },
    setSliderReset(){
      this.setData({
        scrollLeft:0
      })
    },
    hide(){
      console.log('hide',111);
      this.setData({
        isOpen:false
      })
    }
  }
})