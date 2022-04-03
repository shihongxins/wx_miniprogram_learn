// pages/animate/animate.js
Page({
  data: {
    animationData: {},
  },
  // 通过导出并绑定动画数据实现动画（旧）
  triggerAnimation() {
    const animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    });
    // 一组动画（可以认为是动画的一个阶段），这组动画的所有属性会同时开始
    animation.width('400rpx').backgroundColor('lightblue').step({ duration: 1000 });
    // 另一组动画
    animation.width('250rpx').backgroundColor('skyblue').step({ duration: 1000 });
    // 导出动画数据后清空前面的动画组
    const animationData = animation.export();
    this.setData({
      animationData: animationData,
    });
  },
  // 通过设置元素的动画帧属性设置动画（新）
  triggerAnimate() {
    this.animate(".animation.animate", [
      {
        offset: 0,
        ease: 'linear',
        width: '250rpx',
        backgroundColor: 'gray'
      },
      {
        offset: 0.5,
        ease: 'linear',
        width: '400rpx',
        backgroundColor: 'lightgray',
      },
      {
        offset: 1,
        ease: 'linear',
        width: '250rpx',
        backgroundColor: 'gray'
      },
    ], 2000)
  }
})