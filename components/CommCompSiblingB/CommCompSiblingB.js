// components/CommCompSiblingB/CommCompSiblingB.js
Component({
  data: {
    msg: "",
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setMsg({ detail }) {
      const { value } = detail;
      this.setData({
        msg: value,
      });
    },
    sendMsg() {
      this.triggerEvent("sendMsg", {
        from: "SiblingB",
        time: new Date().toLocaleString(),
        msg: this.data.msg
      });
      this.setData({
        msg: '',
      });
    },
  }
})
