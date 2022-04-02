// components/CompLevel1/CompLevel1.js
Component({
  data: {
    timestamp: Date.now(),
  },
  methods: {
    updateTimestamp() {
      this.setData({
        timestamp: Date.now(),
      });
    }
  }
})
