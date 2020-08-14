// loading.js
/**
 * 参数	说明	类型	默认值	版本
color	颜色	string	#c9c9c9	-
type	类型，可选值为 1-4
size	加载图标大小，默认单位为 px	string | number	30px	-
text-size	文字大小，默认单位为为 px	string | number	14px	1.0.0
vertical	是否垂直排列图标和文字内容	boolean	false	1.0.0
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type: String,
      value: ""
    },
    size:{
      type: String,
      value: '16px'
    },
    color:{
      type: String,
      value: '#323233'
    },
    textSize:{
      type: String,
      value: "14px"
    },
    vertical:{
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

  }
})