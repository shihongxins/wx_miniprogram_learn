// components/EventComp2/EventComp2.js
Component({
  methods: {
    triggerEvent2() {
      console.log("组件 EventComp2 向外触发自定义事件 Event2");
      // this.triggerEvent("Event2");
      this.triggerEvent("Event2", null, {
        bubbles: true, // 设置可以冒泡
      });
    },
    handleEvent2InSelfTpl() {
      // 不会输出，说明 内部模板无法监听和响应自定义事件
      console.log("组件 EventComp2 自身内部模板监听并响应 Event2");
    }
  }
})