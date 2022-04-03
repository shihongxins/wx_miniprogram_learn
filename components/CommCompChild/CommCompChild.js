// components/CommCompChild/CommCompChild.js
Component({
  properties: {
    receivedMsg: String, // 定义接收父（外部）传入的数据变量及类型
  },
  data: {
    childMsg: "", // 定义变量用于保存输入并向父发送信息
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 监听 input 事件
    sendChildMsg({ detail }) {
      // 其传递的参数在事件对象 ev.detail 中
      const { value } = detail;
      this.setData({
        childMsg: value,
      });
      // 向父（外部）触发自定义事件，并传递参数保存在事件对象 ev.detail 中
      this.triggerEvent("sendChildMsg", value);
    },
  }
})
