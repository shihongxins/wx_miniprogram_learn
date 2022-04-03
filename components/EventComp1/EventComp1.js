// components/EventComp1/EventComp1.js
Component({
  methods: {
    handleEvent2InSlotTpl() {
      // 不会输出，说明通过插槽嵌入的内容，被嵌入的组件内部模板也无法监听和响应自定义事件
      console.log("组件 EventComp1 通过插槽，在内部模板中监听并响应 Event2");
    }
  }
})
