// pages/communication/communication.js
Page({
  data: {
    childMsg: "", // 定义变量用于接收子传入的信息，才能展示
    pageMsg: "",  // 定义变量用于保存输入并向子发送信息
    msgRecords: [], // 定义中间变量用于保存兄弟组件的聊天信息
  },
  // 监听 input 事件
  sendPageMsg({ detail }) {
    // input 的值在事件对象 ev.detail.value 中
    const { value } = detail;
    this.setData({
      pageMsg: value
    });
  },
  // 响应子的自定义事件的回调
  recvChildMsg({ detail }) {
    // 其传递的参数在事件对象 ev.detail 中
    this.setData({
      childMsg: detail
    });
  },
  // 接收聊天信息，并保存到聊天记录中
  recvSiblingMsg({ detail }) {
    const originRecords = this.data.msgRecords.slice(0);
    originRecords.push(detail);
    this.setData({
      msgRecords: originRecords,
    });
  },
})