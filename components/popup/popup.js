/**
 * popup 弹出层
 * class     外部定义的class 
 * id           弹窗id				通过方法传入 id获取组件里面的内容								
 * visible       显示或者隐藏对话框 	true|false          		默认隐藏
 * mode          内容位置			    bottom|top|middle|let   	默认bottom 
 * modal		       是否显示背景         true|false         	 		默认true
   z-index             弹窗层级             Number              		默认99
 * close-on-click-modal 是否可以通过点击 modal 层来关闭 popup
   close         遮罩隐藏的回调函数
 * 
 */

Component({
	externalClasses: ['popup-class'],
	properties: {
		visible: {
			type: Boolean,
			value: false,
			observer(newValue) {
				this.changeAnimateName(newValue);
			}
		},
		animateType: {
			type: Boolean,
			value: false
		},
		mode: {
			type: String,
			value: 'bottom'
		},
		modal: {
			type: Boolean,
			value: true
		},
		zIndex: {
			type: Number,
			value: 9999
		},
		closeOnClickModal: {
			type: Boolean,
			value: true
		},
		shadowColor: {
			type: String,
			value: "rgba(24, 26, 27, 0.6);"
		}
	},
	data: {
		popTransName: '',
		shadowTransName: '',
		showHide: false,
		timer:null
	},
	methods: {
		preventD() {

		},
		changeAnimateName(type) {
			let popTransName = '',
				shadowTransName = ''
			let {
				mode,
				timer
			} = this.data;
			if (type) {
				popTransName = `${mode}-enter-animated`;
				shadowTransName = 'showdow-enter';
			} else {
				popTransName = `${mode}-leave-animated`;
				shadowTransName = 'showdow-leave';
			}
			let delay=type?50:250
			this.setData({
				popTransName: popTransName,
				shadowTransName: shadowTransName,
			},()=>{
				if(timer) clearTimeout(timer);
				timer=setTimeout(() => {
					this.setData({
						showHide: type
					})
				}, delay)
			})
			
		},
		clickModal() {
			if (this.data.closeOnClickModal)
				this.triggerEvent('close');
		}
	}
})