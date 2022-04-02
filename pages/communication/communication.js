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
  // 更新时间
  updateTime() {
    // 通过组件内部模板的 id 查询，返回 null
    const comp_level_1 = this.selectComponent("#comp_level_1");
    // 通过组件内部模板的 id 查询，返回 null
    const comp_level_2 = this.selectComponent("#comp_level_2");
    // 通过使用组件处的标签定义的属性查询，返回组件实例
    const CompLevel1 = this.selectComponent("#complevel1");
    // 直接查询深层组件失败，返回 null
    const DeepCompLevel2 = this.selectComponent("#complevel2");
    // 一层一层的查询，返回组件实例
    const CompLevel2 = this.selectComponent("#complevel1").selectComponent("#complevel2");

    // 通过组件实例，直接操作其数据和方法
    CompLevel1.updateTimestamp();
    CompLevel2.updateDateTime();
  }
})