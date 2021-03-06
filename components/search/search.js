// search.js
/**
 * placeholder  
 * search 输入框监听输入
 * value  value值
 * focus 输入框获得焦点时触发
 * blur 输入框失去焦点时触发
 * show-action 展示搜索按钮
 */
Component({
  properties:{
    placeholder: {
			type: String,
			value: '请输入搜素关键字'
    },
    value:{
      type: String,
			value: "",
			observer(newValue) {
				if(newValue) this.searchTap();
			}
    },
    showAction:{
      type:Boolean,
      value:false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isSearchInput: false, //是否聚焦搜索框
    timer:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeTap(){
      this.setData({
        value:""
      })
    },
    searchSubmit(){
      let value=this.data.value
      this.triggerEvent('submit',value);
    },
    //点击了搜索区域
    searchTap() {
      //聚焦搜索框
      this.setData({
        isSearchInput: true,
      });
      this.triggerEvent("focus", this.data.value);
    },
    //搜索框失去焦点触发
    searchBlur() {
      if(this.data.value==="")
      this.setData({
        isSearchInput: false,
      });
      this.triggerEvent("blur", this.data.value);
    },
    //实时监听value的变化
    searchValue(e) {
      let { value } = e.detail;
      this.setData({
        value
      })
      console.log('value',value);
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => { 
        this.triggerEvent("search", value);
      }, 600)
    }
  },
});
