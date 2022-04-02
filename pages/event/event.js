// pages/event/event.js
Page({
  // 事件声明只需在选项对象中直接声明即可
  handleEvent() {},
  // 参数传递，需要通过事件对象 e.currentTarget.dataset 获取标签中 data-* 自定义属性
  handleParamsPassing(e) {
    const { msg, arr } = e.currentTarget.dataset;
    console.log(typeof msg, msg); // string 你好
    console.log(typeof arr, arr); // object (3) [1, 2, 3]
  },
  data: {
    count: 0,
    step: 1,
  },
  // 页面更新
  handleCountIncrement() {
    let { count } = this.data;
    count ++;
    // 手动触发更新
    this.setData({ count });
  },
  // 双向绑定
  handleSetStep(e) {
    // input 的 value 得通过事件对象 e.detail 属性获取
    let { value } = e.detail;
    // 且获取的 value 一般为字符串，使用时注意类型转换
    value = +value;
    this.setData({
      step: +value,
    });
    // 2.1.0 可直接返回 value 更新 input 值，旧版本还是需要通过单项绑定和 this.setData
    return value;
  },
  // 捕获阶段
  handleEventCapture(e) {
    console.log(e.currentTarget.dataset);
  },
  // 冒泡阶段
  handleEventBind(e) {
    console.log(e.currentTarget.dataset);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})