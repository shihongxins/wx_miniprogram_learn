// components/CommCompSiblingA/CommCompSiblingA.js
Component({
  data: {
    msg: "",
  },
  methods: {
    setMsg({ detail }) {
      const { value } = detail;
      this.setData({
        msg: value,
      });
    },
    sendMsg() {
      this.triggerEvent("sendMsg", {
        from: "SiblingA",
        time: new Date().toLocaleString(),
        msg: this.data.msg
      });
      this.setData({
        msg: '',
      });
    },
  }
})
