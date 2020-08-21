
Component({
  data: {
  },
  properties: {
    tabs:{
      type:Array,
      value:[]
    },
    current: {
      type: Number,
      value: 0,
    },
    fixed:{
      type:Boolean,
      value:true
    }
  },
  lifetimes: {
    attached() {
      let res = wx.getSystemInfoSync();
      if (res.statusBarHeight >= 44) {
        this.setData({
            ifIphoneX:true
        })
      }
    }
  },
  methods: {
    pathTo(e) {
      let { item, index } = e.currentTarget.dataset;
      console.log('e',e);
      if(index===this.data.current){
        return
      }
      item.index=index;
      this.triggerEvent('click',item);
     
    },
  },
});
